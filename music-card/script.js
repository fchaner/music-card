const audio = document.querySelector("#audio");
const tracks = [...document.querySelectorAll(".track")];

function setActiveTrack(track, shouldPlay) {
  tracks.forEach((item) => item.classList.toggle("is-active", item === track));
  audio.src = track.dataset.src;
  audio.load();

  if (shouldPlay) {
    audio.play().catch(() => {
      audio.controls = true;
    });
  }
}

tracks.forEach((track) => {
  track.addEventListener("click", () => {
    const isCurrent = track.classList.contains("is-active");

    if (isCurrent && !audio.paused) {
      audio.pause();
      return;
    }

    if (!isCurrent) {
      setActiveTrack(track, true);
      return;
    }

    audio.play().catch(() => {
      audio.controls = true;
    });
  });
});

// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let image = document.querySelectorAll("img")[0];
  let icon = document.querySelectorAll("img")[1];
  let hornSelect = document.getElementById("horn-select");
  let volumeSlider = document.getElementById("volume");
  let soundButton = document.querySelector("button");
  let audio = document.getElementsByClassName("hidden")[0];
  const jsConfetti = new JSConfetti();
  const audioPath = "assets/audio/";
  const imagePath = "assets/images/";
  const iconPath = "assets/icons/"
  const audios = [null, "air-horn.mp3", "car-horn.mp3", 'party-horn.mp3'];
  const images = ["no-image.png", "air-horn.svg", "car-horn.svg", "party-horn.svg"]
  const icons = ["volume-level-0.svg", "volume-level-1.svg", "volume-level-2.svg", "volume-level-3.svg"];

  hornSelect.addEventListener('change', function() {
    audio.src = audioPath + audios[hornSelect.selectedIndex];
    image.src = imagePath + images[hornSelect.selectedIndex];
  })

  volumeSlider.addEventListener('input', function() {
    if (volumeSlider.value == 0){
      icon.src = iconPath + icons[0];
    } else if (volumeSlider.value < 33){
      icon.src = iconPath + icons[1];
    } else if (volumeSlider.value < 67){
      icon.src = iconPath + icons[2];
    } else {
      icon.src = iconPath + icons[3];
    }
    audio.volume = volumeSlider.value / 100;
  })

  soundButton.addEventListener('click', function() {

    if (audio.src.includes(audios[3])){
      jsConfetti.addConfetti();
    }

    audio.load();
    audio.play();
  })
}
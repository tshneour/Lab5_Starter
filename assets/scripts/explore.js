// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let voiceSelector = document.getElementById("voice-select");
  let text = document.getElementById("text-to-speak");
  let voiceButton = document.querySelector("button");
  let face = document.querySelector("img");
  const synth = window.speechSynthesis;
  const faceSrc = "assets/images/";

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function populateVoiceList(){
    
    const voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++){
      
      let option = document.createElement("option");
      option.setAttribute("name", voices[i].name);
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      voiceSelector.appendChild(option);

    }

  }

  function changeFaceOpen(){
    face.src = faceSrc + "smiling-open.png";
  }

  function changeFaceSmiling(){
    face.src = faceSrc + "smiling.png";
  }

  voiceButton.addEventListener('click', function() {

    if (voiceSelector.selectedOptions[0].textContent === "Select Voice:" || text.value == ""){
      return;
    }

    const voices = synth.getVoices();
    let speech = new SpeechSynthesisUtterance(text.value);
    speech.addEventListener('start', changeFaceOpen)
    speech.addEventListener('end', changeFaceSmiling)

    for (let i = 0; i < voices.length; i++){

      if (voices[i].name === voiceSelector.selectedOptions[0].getAttribute("name")){
        speech.voice = voices[i];
      }

    } 

    synth.speak(speech);
  })

}
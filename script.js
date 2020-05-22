//Grab DOM elements
const msgEl = document.getElementById("msg");

const randomNum = getRadnomNubmer();

console.log("Number:", randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

//Start recognition and game
recognition.start();

//Capture user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript;

  //writeMessage(msg);
  //checkNumber(msg);
}

//Generate random number

function getRadnomNubmer() {
  return Math.floor(Math.random() * 100) + 1;
}

//Speek result
recognition.addEventListener("result", onSpeak);

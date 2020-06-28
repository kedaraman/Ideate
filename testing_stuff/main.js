var subscriptionKey = "048a3354573941f596e31660a227212d"; //MOVE THIS TO ENV
var serviceRegion = "westus2";

var SpeechSDK;

var recognizer;
var speechConfig;

window.alert("HI");

function clicked() {
  window.alert("lets go crazy");
}

// subscription key and region for speech services.
document.addEventListener("DOMContentLoaded", function () {
  if (!!window.SpeechSDK) {
    SpeechSDK = window.SpeechSDK;
  }
  subscriptionKey = "048a3354573941f596e31660a227212d";
  serviceRegion = "westus2";
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
});

function start() {
  speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
    subscriptionKey,
    serviceRegion
  );
  speechConfig.speechRecognitionLanguage = "en-US"; //MAKE CONVERSATIONALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
  var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
  recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

  recognizer.recognized = (s, e) => {
    console.log(" Recognized: " + e.result.text);
  };

  recognizer.recognizing = (s, e) => {
    console.log(" Recognizing: " + e.result.text);
  };

  recognizer.startContinuousRecognitionAsync(
    () => {
      console.log("Starting Recording");
    },
    (error) => {
      console.log("ERROR starting: " + error);
    }
  );
  document.getElementById("stop").disabled = false;
  document.getElementById("start").disabled = true;
}

function stop() {
  recognizer.stopContinuousRecognitionAsync(
    () => {
      console.log("Stopping Recording");
    },
    (error) => {
      console.log("ERROR stopping: " + error);
    }
  );
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
}

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
// import { TextField } from "material-ui/core";
import SpeechSDK from "microsoft-cognitiveservices-speech-sdk";

function SpeechToText() {
  const [startDisabled, setStartDisabled] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(true);
  const [text, setText] = useState("NO INPUT");

  //Parameters necc for Azure Speech to Text
  var subscriptionKey = "048a3354573941f596e31660a227212d"; //MOVE THIS TO ENV
  var serviceRegion = "westus2";

  var speechSDK;

  var recognizer;
  var speechConfig;
  //End of Params necc for Azure Speech to Text

  //This UseEffect needs to run once after the DOM Content is Loaded (DOMContentLoaded event in JS)
  useEffect(() => {
    console.log("INITIALIZE!!!");
    //Create the script to access Azure Speech To Text
    // const script = document.createElement("script");

    // script.src = azureS2T;
    // script.async = true;

    // document.body.appendChild(script);
    //SpeechSDK = require("microsoft-cognitiveservices-speech-sdk");
    // if (!!window.SpeechSDK) {
    //   SpeechSDK = window.SpeechSDK;
    // }
    speechSDK = new SpeechSDK();
    subscriptionKey = "048a3354573941f596e31660a227212d";
    serviceRegion = "westus2";

    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  const start = () => {
    //window.alert("START");
    speechConfig = speechSDK.SpeechConfig.fromSubscription(
      subscriptionKey,
      serviceRegion
    );
    speechConfig.speechRecognitionLanguage = "en-US"; //MAKE CONVERSATIONALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
    var audioConfig = speechSDK.AudioConfig.fromDefaultMicrophoneInput();
    recognizer = new speechSDK.SpeechRecognizer(speechConfig, audioConfig);

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
    setStartDisabled(true);
    setStopDisabled(false);
  };

  const stop = () => {
    window.alert("STOP");
    recognizer.stopContinuousRecognitionAsync(
      () => {
        console.log("Stopping Recording");
      },
      (error) => {
        console.log("ERROR stopping: " + error);
      }
    );
    setStartDisabled(false);
    setStopDisabled(true);
  };

  return (
    <div className="outerContainer">
      <Button disabled={startDisabled} onClick={start}>
        Start
      </Button>
      <Button disabled={stopDisabled} onClick={stop}>
        Stop
      </Button>
      <textarea readOnly>{text}</textarea>
      {/* <TextField>HELLO!!!</TextField> */}
    </div>
  );
}

export default SpeechToText;
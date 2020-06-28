import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// import { TextField } from "material-ui/core";
import Divider from '@material-ui/core/Divider';
import {
  SpeechConfig,
  AudioConfig,
  SpeechRecognizer,
} from "microsoft-cognitiveservices-speech-sdk";

let recognizer;
let speechConfig;

function SpeechToText() {
  const [startDisabled, setStartDisabled] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(true);

  let textArrayGlobal = [];

  const [textArray, setTextArray] = useState([]);

  const [text, setText] = useState("Press start to begin.");

  //Parameters necc for Azure Speech to Text
  var subscriptionKey = "048a3354573941f596e31660a227212d"; //MOVE THIS TO ENV
  var serviceRegion = "westus2";

  //This UseEffect needs to run once after the DOM Content is Loaded (DOMContentLoaded event in JS)
  useEffect(() => {
    console.log("Init for Azure Services");

    subscriptionKey = "048a3354573941f596e31660a227212d";
    serviceRegion = "westus2";

    speechConfig = SpeechConfig.fromSubscription(
      subscriptionKey,
      serviceRegion
    );
    speechConfig.speechRecognitionLanguage = "en-US";
    var audioConfig = AudioConfig.fromDefaultMicrophoneInput();
    recognizer = new SpeechRecognizer(speechConfig, audioConfig);

  }, []);

  const start = () => {

    setTextArray([]);

    recognizer.recognized = (s, e) => {
      console.log(" Recognized: " + e.result.text);
      setText(e.result.text);
      textArrayGlobal.push(e.result.text);
      console.log(textArrayGlobal);
      setTextArray(textArrayGlobal);
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

  async function stop() {
    try {
      // window.alert("Ideate has stopped listening");
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
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="outerContainer">
      <Button variant="contained" color="primary" disabled={startDisabled} onClick={start}>
        Start
      </Button>
      <Button variant="contained" color="secondary" disabled={stopDisabled} onClick={stop}>
        Stop
      </Button>
      <br/>
      <br/>
      <Divider/>
      <h1>
        What you last said
      </h1>
      <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
        {text}
      </Box>

      <Divider/>
      <h1>
        Transcript
      </h1>
      <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
        {textArray.map(txt => <p>{txt}</p>)}
      </Box>
    </div>
  );
}

export default SpeechToText;

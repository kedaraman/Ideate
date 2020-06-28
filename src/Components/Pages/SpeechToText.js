import React, { useState, useEffect } from "react";
import ApiService from '../../MiddleTier/ApiService';
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

const apiService = new ApiService();

function SpeechToText() {
  const [startDisabled, setStartDisabled] = useState(false);
  const [stopDisabled, setStopDisabled] = useState(true);

  const [phrase, setPhrase] = useState([]);

  const [bingRes, setBingRes] = useState([])

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

  async function topicHandler () {

   if(textArray.length >= 2) {
      let inputText = textArray[textArray.length - 2];
      console.log("inputText: " + inputText);

      let data = await apiService.getKeyPhraseExtraction(inputText);
      console.log(data);
      let phrases = data.data.phrases;
      console.log(phrases);

      if(phrases) {
        setPhrase(phrases);

        // use phrases for bing results
        let joinedData = phrases.join(' ');
        let bingData = await apiService.getRelatedSearch(joinedData);
        console.log("ffff")
        console.log(bingData);
  
        let bingPhrases = bingData.data.related;
        setBingRes(bingPhrases);
      }

   }

  }
 

  async function start() {

    try {
      
    setTextArray([]);
    setPhrase([]);
    setBingRes([]);

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

    }

    catch (err) {
      console.error(err);
    }

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
      <br/>
      <br/>
      <Button variant="contained" color="secondary" onClick={topicHandler}>
        Get Topics
      </Button>
      <h1>
        Topics you talked about
      </h1>
      <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
        {phrase.map(txt => <p>{txt}</p>)}
      </Box>

      <Divider/>
      <h1>
        Topics we suggest
      </h1>
      <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
        {bingRes.map(txt => <p>{txt}</p>)}
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

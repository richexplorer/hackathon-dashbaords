import Cookies from "universal-cookie";
import { mainConfig } from "./appConfig";
import Vapi from '@vapi-ai/web';

const vapi = new Vapi('d99dbbf0-b1df-4bff-a44c-138fa2fe7e93');

export const zenithFunctions = {
    startSession : () => {
        vapi.start("ed3007be-c9e7-48c0-aeaf-aae59c86607a");
    },

    endSession : () => {
        vapi.stop();
    },
}

vapi.on('speech-start', () => {
    console.log('Speech has started');
  });
  
  vapi.on('speech-end', () => {
    console.log('Speech has ended');
  });
  
  vapi.on('call-start', () => {
    console.log('Call has started');
  });
  
  vapi.on('call-end', () => {
    console.log('Call has stopped');
  });
  
  vapi.on('volume-level', (volume) => {
    console.log(`Assistant volume level: ${volume}`);
  });
  
  // Function calls and transcripts will be sent via messages
  vapi.on('message', (message) => {
    console.log(message);
  });
  
  vapi.on('error', (e) => {
    console.error(e)
  });

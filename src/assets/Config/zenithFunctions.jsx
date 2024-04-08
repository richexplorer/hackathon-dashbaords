import { mainConfig } from "./appConfig";
import Vapi from '@vapi-ai/web';

const vapi = new Vapi('d99dbbf0-b1df-4bff-a44c-138fa2fe7e93');
var convArray = [];
var sessionRunning = false;

export const zenithFunctions = {
    startSession : function() {
        vapi.start("ed3007be-c9e7-48c0-aeaf-aae59c86607a");
        sessionRunning = true;
    },

    endSession : function() {
        vapi.stop();
        this.addCurrentSessionIntoList();
        sessionRunning = false;
    },

    toggleSession : function() {
        if (sessionRunning == true) {
            this.endSession();
        } else {
            this.startSession();
        }
    },

    addCurrentSessionIntoList : function() {
        // Retrieve the existing conversations array from local storage, or initialize a new array if it doesn't exist
        const existingConversations = JSON.parse(localStorage.getItem('conversations')) || [];
        
        // Add the current session into the array
        existingConversations.push(convArray);
        
        // Save the updated array back into local storage
        localStorage.setItem('conversations', JSON.stringify(existingConversations));

        console.log(existingConversations);
    },

    getAllConversations : function() {
        return JSON.parse(localStorage.getItem('conversations')) || [];
    },

    saveConversations: function(conversations) {
        localStorage.setItem('conversations', JSON.stringify(conversations));
    }
}

// vapi.on('speech-start', () => {
//     console.log('Speech has started');
//   });
  
//   vapi.on('speech-end', () => {
//     console.log('Speech has ended');
//   });
  
//   vapi.on('call-start', () => {
//     console.log('Call has started');
//   });
  
//   vapi.on('call-end', () => {
//     console.log('Call has stopped');
//   });
  
//   vapi.on('volume-level', (volume) => {
//     console.log(`Assistant volume level: ${volume}`);
//   });
  
  // Function calls and transcripts will be sent via messages
  vapi.on('message', (message) => {
    console.log(message);
    if (message.type == "conversation-update") {
        convArray = message.conversation;
    }
  });
  
  vapi.on('error', (e) => {
    console.error(e)
  });

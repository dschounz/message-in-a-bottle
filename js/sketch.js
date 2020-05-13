//DB URL https://console.firebase.google.com/u/0/project/messageinabottle-d4dd4/database/messageinabottle-d4dd4/data

'use strict';

let nodeData; // object we will push to firebase
let fbData; // data we pull from firebase
let fbDataArray; // firebase data values converted to an array
let database; // reference to our firebase database
let folderName = 'messages'; // name of folder you create in db
let messageInput;
let sendMessageButton;
let receiveMessageButton;
let receivedMessage;
let receiveDiv;
let sendDiv;

function setup() {
  noCanvas();

  // access DOM elements
  //messageInput = select("#messageInput");
  messageInput = document.querySelector("#messageInput");
  sendMessageButton = document.querySelector("#sendMessageButton");
  receiveMessageButton = document.querySelector("#receiveMessageButton");
  receivedMessage = document.querySelector("#receivedMessage");
  receiveDiv = document.querySelector("#receiveDiv");
  sendDiv = document.querySelector("#sendDiv");


  sendMessageButton.addEventListener('click', sendMessage);
  receiveMessageButton.addEventListener('click', receiveMessage);

  // Initialize firebase
// support for Firebase Realtime Database 4 web here: https://firebase.google.com/docs/database/web/start
// Copy and paste your config here (replace object commented out)
// ---> directions on finding config below

// paste your config file here
let config = {
   var firebaseConfig = {
    apiKey: "AIzaSyBTSg4Np3pdel_f05GbcrWVqSvCb5SDiCk",
    authDomain: "messageinabottle-d4dd4.firebaseapp.com",
    databaseURL: "https://messageinabottle-d4dd4.firebaseio.com",
    projectId: "messageinabottle-d4dd4",
    storageBucket: "messageinabottle-d4dd4.appspot.com",
    messagingSenderId: "791310026035",
    appId: "1:791310026035:web:8b80fae439993fb6706a46"

};

firebase.initializeApp(config);

database = firebase.database();

// this points to the folder you want your data to appear in
let ref = database.ref(folderName);

// initialize Firebase connection
// callback functions are gotData() and errData()
ref.on('value', gotData, errData);


// ---> To find your config object:
// They will provide it during Firebase setup
// or (if your project already created)
// 1. Go to main console page
// 2. Click on project
// 3. On project home page click on name of app under project name (in large font)
// 4. Click the gear icon --> it's in there!



}

function draw() {

}

function sendMessage(){

if (messageInput.value) {
let timestamp = Date.now();
nodeData= {
  messageText: messageInput.value,
  timestamp: timestamp,

}

//push to firebase
  createNode(folderName, timestamp, nodeData);

createP('send message: {nodeData.messageText}');

//zero out textarea
messageInput.value = '';

} else {
  alert("type message first.")
}
}

function receiveMessage(){
  
}

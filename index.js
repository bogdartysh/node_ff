var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var { modelFor } = require("sdk/model/core");
var { viewFor } = require("sdk/view/core");
var browserWindows = require("sdk/windows").browserWindows;
var utils = require('sdk/window/utils');

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./ico_16.png",
    "32": "./ico_32.png",
    "64": "./ico_64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  console.log('hello');
var windows = require("sdk/windows"); 
for (let window of windows.browserWindows) {
  console.log(window.title);
  console.log(window);
 var chromeWindow = viewFor(window);
  var audioCtx = new (chromeWindow.AudioContext || chromeWindow.webkitAudioContext)();
  var analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);
  analyser.getByteTimeDomainData(dataArray);
  console.log("got it");
  for(var i = 0; i < bufferLength; i++) {
      console.log(dataArray[i]);
  }

}


/*
 var chromeWindow = viewFor(browserWindow);
  console.log(chromeWindow.document.location.href);
   var active = utils.getMostRecentBrowserWindow();  

  var audioCtx = new (chromeWindow.AudioContext || chromeWindow.webkitAudioContext)();

  tabs.open("http://www.mozilla.org/");
*/
}


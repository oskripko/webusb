var connectionId;

/* Converts a string to UTF-8 encoding in a Uint8Array; returns the array */


var str2ab = function(str) {
   var encodedString = unescape(encodeURIComponent(str));
   var bytes = new Uint8Array(encodedString.length);
   for (var i = 0; i < encodedString.length; ++i) {
      bytes[i] = encodedString.charCodeAt(i);
   }
   return bytes.buffer;
};

var options = {
  'bitrate': 115200,
  'dataBits': 'eight',
  'parityBit': 'no',
  'stopBits': 'one'
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', btnSend);
  chrome.serial.connect('COM2', options, function(info) {
    connectionId = info.connectionId;
    console.log("Connection established.");
  });
});

var btnSend = function() {
  var msg = "hello printer 123456\n";
  chrome.serial.send(connectionId, str2ab(msg), function() {
 console.log("msg");
  	
  } );
}
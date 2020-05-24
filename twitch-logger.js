const tmi = require("tmi.js");
const fs = require("fs");

var channel = "<insert channel name here>";

// Create twitch client (hidden).
const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: [channel]
});

// Connect to the chat.
client.connect();
console.log("Connected!");
var date = new Date().toDateString();
fs.appendFileSync(`./output/${date}.txt`, "\nStart of Twitch Chat log of '" + channel + "'.\n\n");

// Register event handlers.
client.on("message", onMessageHandler);

// Execute code on every message. This function will log all the data to a .log file.
function onMessageHandler (channel, tags, msg, self) {
    var today = new Date;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + "    " + `${tags["display-name"]}: ${msg}`);
    fs.appendFileSync(`./output/${date}.txt`, time + "    " + `${tags["display-name"]}: ${msg} \n`);
}

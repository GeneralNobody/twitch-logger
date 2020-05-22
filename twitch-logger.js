// Require modules.
const tmi = require("tmi.js");
const fs = require("fs");

//var channel = "";

// Create twitch client (hidden).
const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: ["generalnobody1"]
});

// Connect to the chat.
client.connect();
console.log("Connected!");
var date = new Date;
// var dateString = date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear() + "_" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// var filePath = "./output/" + dateString + ".log";
fs.appendFileSync("./output/chatlog.txt", "\nStart of Twitch Chat log of '" + client.channels[0] + "', chat start date/time: " + date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear() + "_" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "\n \n")

// Register event handlers.
client.on("message", onMessageHandler);

// Execute code on every message. This function will log all the data to a .log file.
function onMessageHandler (channel, tags, msg, self) {
    var today = new Date;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time + "    " + `${tags["display-name"]}: ${msg}`);
    fs.appendFileSync("./output/chatlog.txt", time + "    " + `${tags["display-name"]}: ${msg} \n`);
}
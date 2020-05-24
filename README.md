# twitch-logger
 An app that will log all twitch chat messages of a certain channel.
 

## Requirements
 - NodeJS (this app was developed with version 14.3.0, but should work fine with other versions)
## Installation
 To install this program, simply clone this GitHub repo. Then, open your command line of choice and cd to the directory you cloned the program to. After this, run ```$ npm install``` to install the external packages that are used in this script. After that, either run ```$ npm start``` or ```node twitch-logger.js``` to start the program.
 
## Usage
 When starting the program, it will create a .txt file in an output folder in the installation folder. This txt file will be named according to the date the program was run on. Any Twitch chatlogs of that day will be saved in that .txt file. When you run the program on another day, it will create a new file that has the date of that day as its name.  
 To select a channel to log the chat of, please change the 'insert channel name here' in the script to whatever channel you want it to log the chat of. The channel name can be found when looking at the url of the Twitch streamer, so for https://www.twitch.tv/streamer the channel name will be 'streamer'.
 Example:  
 Change 
 ```js
 var channel = "<insert channel name here>";
 ```  
 to  
 ```js
 var channel = "streamer";
 ```
 if the channel name is 'streamer'.

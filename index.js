// Log current tab URL

var self = require("sdk/self");

require("sdk/tabs").on("ready", logURL);

function logURL(tab) {
    console.log("The tab url is:" +  tab.url);
}


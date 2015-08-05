// Load Planet.com widget to about:blank page

var self = require("sdk/self");
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");

//TestingCode: Listen for tab content loads.
tabs.on('ready', function(tab) {
  console.log('tab is loaded', tab.title, tab.url);
});

// Match about:blank and load sample tags into it. 
pageMod.PageMod({
  include: [/about:blank/, /about:newtab/, "*.debian.org"],
   // attachTo: ["top", "frames", "existing"],
   // contentScriptWhen: 'end',
   contentScript: 'console.log("Matched");',
  //  contentScript: 'document.getElementById("newtab-scrollbox").innerHTML = ' + ' "<h1>Page matches ruleset</h1>";'
   
});

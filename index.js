// Load Planet.com widget in new empty tab

var self = require("sdk/self");
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");

//TestingCode: Listen for tab content loads.
tabs.on('ready', function(tab) {
  console.log('tab is loaded', tab.title, tab.url);
});

// Match about:newtab, about:blank and load sample tags into it. 
pageMod.PageMod({
  include: ["about:newtab", "about:blank", "*.debian.org"],
   contentScript: 'document.body.innerHTML = ' + ' "<h1>Page matches ruleset</h1>";'
   //contentURL: self.data.url('index.html')
});

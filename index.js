// Log current tab URL

var self = require("sdk/self");
var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");

//var script = require("sdk/self").data.url("index.html");



// Listen for tab content loads.
tabs.on('ready', function(tab) {
  console.log('tab is loaded', tab.title, tab.url);
});


pageMod.PageMod({
  include: "about:newtab, about:blank, about:",
   contentScript: 'document.body.innerHTML = ' +
                 ' "<h1>Page matches ruleset</h1>";'
});

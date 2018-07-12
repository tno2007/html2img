var webshot = require('node-webshot');
var nss = require("node-server-screenshot");




var url = "https://iriesoft.co.za/public/grid.html";
var out = "snap.png"

//webshot(url, out, function(err) {
  // screenshot now saved to google.png
//});




nss.fromURL(url, out, function(){
    //an image of google.com has been saved at ./test.png
});
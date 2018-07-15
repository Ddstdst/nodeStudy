// var server = require("./server");

// server.start();


var server = require("./server");
var router = require("./router");

server.start(router.route);
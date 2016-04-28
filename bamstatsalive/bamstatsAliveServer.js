#!/usr/bin/env node
// Chase Miller 2013-2016

// Initialize Server
var port = 7100;
    minion = require('../index.js')(port);


// Define tool
var tool = {
   apiVersion : "0.1",
   name : 'bamstatsAlive',
   path :  'bamstatsAlive',
   inputOption: '-fake',
   description : 'utility for bam files',
   exampleUrl : "fill in"
};

// Start minion socket
minion.listen(tool);
console.log('iobio server started on port ' + port);

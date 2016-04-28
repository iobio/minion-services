#!/usr/bin/env node

var port = 4023,
    minion = require('../index.js')(port);

// define tool
var tool = {
   apiVersion : "0.1",
   name : 'vep',
   path :  'vep.sh',
   args: ['-'],
   // instructional data used in /help
   description : '',
   exampleUrl : ""
};

// start minion socket
minion.listen(tool);
console.log('iobio server started on port ' + port);

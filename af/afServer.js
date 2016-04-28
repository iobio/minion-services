#!/usr/bin/env node

var port = 4010,
    minion = require('../index.js')(port);

// define tool
var tool = {
   apiVersion : "0.1",
   name : 'annot',
   path :  'afbgalive',
   args: ['-'],
   // instructional data used in /help
   description : '',
   exampleUrl : ""
};

// start minion socket
minion.listen(tool);
console.log('iobio server started on port ' + port);
#!/usr/bin/env node


var port = 4016,
    minion = require('../index.js')(port);

// define tool
var tool = {
   apiVersion : "0.1",
   name : 'coverage',
   path :  'coverage.sh',
   args: ['-'],
   // instructional data used in /help
   description : '',
   exampleUrl : ""
};

// start minion socket
minion.listen(tool);
console.log('iobio coverage server started on port ' + port);

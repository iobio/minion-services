#!/usr/bin/env node

var port = 8000,
    minion = require('../index.js')(port);    

// define tool
var tool = {
   apiVersion : "0.1",
   name : 'vt',
   path :  'vt.sh',
   args: ['-'],
   // instructional data used in /help
   description : '',
   exampleUrl : ""
};

// start minion socket
minion.listen(tool);
console.log('iobio vt server started on port ' + port);

#!/usr/bin/env node
var port = 4024,
    minion = require('../index.js')(port);    ;

var tool = {
   apiVersion : "0.1",
   name : 'sratoolkit',
   path: 'sratoolkit/',
   description : 'sra toolkit webservice',
   exampleUrl : ""
};

  minion.listen(tool);
  console.log('iobio server started on port ' + port);

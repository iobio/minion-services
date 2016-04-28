#!/usr/bin/env node
// Chase Miller 2013-2016

// Initialize Server
var port = 4020;
    minion = require('../index.js')(port);


// Define tool
var tool = {
   apiVersion : "0.1",
   name : 'vcflib',
   path: 'vcflib/',
   json : function(line) {
      if( line[line.length-1] == "\n" ) line = line.slice(0,-1);
      var fields = line.split("\t");
      if (line && line.charAt(0) != '#') {
         return JSON.stringify(
            {
               data : {
                chrom    : fields[0],
                pos      : fields[1],
                id       : fields[2],
                ref      : fields[3],
                alt      : fields[4],
                qual     : fields[5],
                filter   : fields[6],
                info     : fields[7],
                format   : fields[8],
                genotypes: fields.slice(9, fields.length)
               }
            }
         );
      } else if(line.slice(0,6) == "#CHROM")
         return JSON.stringify( {header: { samples : fields.slice(9, fields.length) } } );
   },
   // instructional data used in /help
   description : 'utility for manipulating vcf files',
   exampleUrl : ""
};

// Start minion socket
minion.listen(tool);
console.log('iobio server started on port ' + port);
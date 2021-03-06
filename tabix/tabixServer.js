#!/usr/bin/env node
// Chase Miller 2013-2016

// Initialize Server
var port = 4019;
    minion = require('../index.js')(port);


// Define tool
var tool = {
   apiVersion : "0.1",
   name : 'tabix',
   path: 'tabix',
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
   description : 'stream sections of static vcf.gz files',
   exampleUrl : "http://tabix.iobio.io?cmd=-h%20'http://s3.amazonaws.com/1000genomes/release/20101123/interim_phase1_release/ALL.chr2.phase1.projectConsensus.genotypes.vcf.gz'%202:4000000-4050000"
};

// Start minion socket
minion.listen(tool);
console.log('iobio server started on port ' + port);
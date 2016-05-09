#!/usr/bin/env node
// Chase Miller 2013-2016

// Initialize Server
var port = 4025;
    minion = require('../index.js')(port);


// Define tool
var tool = {
    apiVersion :  "0.1",
    name :        'vcf read depther',
    path :        'vcfReadDeptherHelper.sh',
    description : 'quickly approximates variant density by reading tabix index file associated with a gzipped vcf',
    exampleUrl :  "vcfReadDepther -i example.gz.vcf.tbi"
};

// Start minion socket
minion.listen(tool);
console.log('iobio server started on port ' + port);

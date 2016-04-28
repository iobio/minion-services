#!/usr/bin/env node
// Chase Miller 2013-2016

// Initialize Server
var port = 7100;
    minion = require('../index.js')(port);


// Define tool
var tool = {
   apiVersion : "0.1",
   name : 'Bam Downloader',
   path :  'bamHelper.sh',
   // instructional data used in /help
   description : 'download and merge a region of multiple bam files',
   exampleUrl : "http://bamMerger.iobio.io?cmd=11:10108473-10188473%20'http://s3.amazonaws.com/1000genomes/data/NA06984/alignment/NA06984.chrom11.ILLUMINA.bwa.CEU.low_coverage.20111114.bam'%20'http://s3.amazonaws.com/1000genomes/data/NA06985/alignment/NA06985.chrom11.ILLUMINA.bwa.CEU.low_coverage.20111114.bam'"
};

// Start minion socket
minion.listen(tool);
console.log('iobio server started on port ' + port);
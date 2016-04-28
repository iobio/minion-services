#!/bin/bash

region=$1;

cmd=""

for i in ${@:2}
do
   cmd=$cmd" -in <(samtools view -b $i $region)"
done

cmd="bamtools merge "$cmd
eval $cmd

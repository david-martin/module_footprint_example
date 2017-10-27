var lastMem = process.memoryUsage()
console.log(lastMem);

var currentMem = {}
var memDiff = {}

function compareMem() {
  currentMem = process.memoryUsage()
  memDiff.rss = currentMem.rss - lastMem.rss
  memDiff.heapTotal = currentMem.heapTotal - lastMem.heapTotal
  memDiff.heapUsed = currentMem.heapUsed - lastMem.heapUsed
  memDiff.external = currentMem.external - lastMem.external
  console.log('MEM DIFF', memDiff)
  lastMem = JSON.parse(JSON.stringify(currentMem))
}


compareMem()

const express = require('express')
console.log('express required')
compareMem()

const parseurl = require('parseurl')
console.log('parseurl required')
compareMem()

console.log('done')

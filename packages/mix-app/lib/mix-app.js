'use strict';
const mini1 = require('mini-1');
const mini2 = require('mini-2');
module.exports = mixApp;

function mixApp() {
  return mini1() + mini2() +  'Hello from mixApp';
}
const res = mixApp();
console.log(res);

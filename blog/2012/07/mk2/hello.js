
var mk2 = require('./build/Release/mk2');

console.log(mk2);
console.log('hello() => %j', mk2.hello());
console.log('helloNoClose() => %j', mk2.helloNoClose());
console.log('newPointArray() => %j', mk2.newPointArray(1, 2, 3));
console.log('newPointArrayNoClose() => %j', mk2.newPointArrayNoClose(4, 5, 6));

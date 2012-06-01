var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var cycles = 100;
var datas = [];
for (var i = 0; i < cycles; i++) {
  datas.push(i);
}

suite
.add('for (var i = 0; i < l; i++)', function () {
  var n = 0;
  for (var i = 0; i < cycles; i++) {
    n++;
  }
})
.add('for (var i = l; i--;)', function () {
  var n = 0;
  for (var i = cycles; i--;) {
    n++;
  }
})
.add('while (i++ < l)', function () {
  var i = 0;
  var n = 0;
  while (i++ < cycles) {
    n++;
  }
})
.add('while (i--)', function () {
  var i = cycles;
  var n = 0;
  while (i--) {
    n++;
  }
})
.add('Array.forEach()', function () {
  var n = 0;
  datas.forEach(function (i) {
    n++;
  });
})
// add listeners
.on('cycle', function (event, bench) {
  console.log(String(bench));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });


var Benchmark = require('benchmark');

function slice() {
  return Array.prototype.slice.call(arguments);
}

function forAndArrayPush() {
  var args = [];
  for (var i = 0, l = arguments.length; i < l; i++) {
    args.push(arguments[i]);
  }
  return args;
}

function forAndArraySet() {
  var args = [];
  for (var i = 0, l = arguments.length; i < l; i++) {
    args[i] = arguments[i];
  }
  return args;
}

var suite = new Benchmark.Suite();

suite
.add('slice(1)', function () {
  slice(1);
})
.add('forAndArrayPust(1)', function () {
  forAndArrayPush(1);
})
.add('forAndArraySet(1)', function () {
  forAndArraySet(1);
})

.add('slice(1, 2)', function () {
  slice(1, 2);
})
.add('forAndArrayPust(1, 2)', function () {
  forAndArrayPush(1, 2);
})
.add('forAndArraySet(1, 2)', function () {
  forAndArraySet(1, 2);
})

.add('slice(1, 2, 3)', function () {
  slice(1, 2, 3);
})
.add('forAndArrayPust(1, 2, 3)', function () {
  forAndArrayPush(1, 2, 3);
})
.add('forAndArraySet(1, 2, 3)', function () {
  forAndArraySet(1, 2, 3);
})

.add('slice(1, 2, 3, 4, 5)', function () {
  slice(1, 2, 3, 4, 5);
})
.add('forAndArrayPust(1, 2, 3, 4, 5)', function () {
  forAndArrayPush(1, 2, 3, 4, 5);
})
.add('forAndArraySet(1, 2, 3, 4, 5)', function () {
  forAndArraySet(1, 2, 3, 4, 5);
})

.add('slice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)', function () {
  slice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
})
.add('forAndArrayPust(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)', function () {
  forAndArrayPush(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
})
.add('forAndArraySet(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)', function () {
  forAndArraySet(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
})

// add listeners
.on('cycle', function (event, bench) {
  console.log(String(bench));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });
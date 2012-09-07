# fibonacci(40) benchmark

[Node.js is Cancer](http://teddziuba.com/2011/10/node-js-is-cancer.html) show a wrong way to use nodejs.
But the test code **[Fibonacci](http://en.wikipedia.org/wiki/Fibonacci)** is so funny.
I implement the **fibonacci function** in other **[Dynamic Languages](http://en.wikipedia.org/wiki/Dynamic_programming_language)** for comparison testing.

## Languages

### Dynamic

* [nodejs](http://nodejs.org)
* [nodejs + cpp module](http://kkaefer.github.com/node-cpp-modules)
* [python](http://python.org)
* [pypy](http://pypy.org/): a fast, compliant alternative implementation of the Python language (2.7.1). 
* [perl](http://perl.org) 
* [php](http://www.php.net/)
* [ruby](http://www.ruby-lang.org/)
* [lua](http://www.lua.org/)
* [luajit](http://luajit.org/): a Just-In-Time Compiler for Lua.

### Static

* [c](http://en.wikipedia.org/wiki/C_\(programming_language\))
* [go](http://golang.org/)

If you want to help add more dynamic languagues, please leave the **implement code** in comments.

## Results

(^_^) c > go > luajit > nodejs > pypy > lua > python > php > perl > ruby1.9.3 > ruby1.8.5 (T_T)

<table>
  <tr><th>Language</th><th>Times</th><th>Position</th></tr>
  <tr><td style="color: green;">c</td><td>0m1.606s</td><td>#0</td></tr>
  <tr><td style="color: green;">go</td><td>0m1.769s</td><td>#1</td></tr>
  <tr><td style="color: green;">node + cpp module</td><td>0m2.216s</td><td>#2</td></tr>
  <tr><td style="color: green;">luajit</td><td>0m2.583s</td><td>#3</td></tr>
  <tr><td style="color: green;">nodejs</td><td>0m5.124s</td><td>#4</td></tr>
  <tr><td style="color: green;">pypy</td><td>0m7.562s</td><td>#5</td></tr>
  <tr><td>lua</td><td>0m34.492s</td><td>#6</td></tr>
  <tr><td>python</td><td>1m11.647s</td><td>#7</td></tr>
  <tr><td>php</td><td>1m28.198s</td><td>#8</td></tr>
  <tr><td>perl</td><td>2m34.658s</td><td>#9</td></tr>
  <tr><td style="color: red;">ruby 1.9.3</td><td>4m40.790s</td><td>#10</td></tr>
  <tr><td style="color: red;">ruby 1.8.5</td><td>4m41.942s</td><td>#11</td></tr>
</table>

**lua** use *local function* will get better performance.

## fibonacci(40) benchmark result:

### c
i686-apple-darwin11-llvm-gcc-4.2 (GCC) 4.2.1 (Based on Apple Inc. build 5658) (LLVM build 2336.11.00)

```c
#include <stdio.h>

int fibonacci(n) {
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

int main() {
  printf("%d\n", fibonacci(40));
  return 0;
}
```

gcc -O0

```bash
165580141

real  0m4.011s
user  0m3.887s
sys 0m0.011s
```

gcc -O1

```bash
165580141

real  0m1.818s
user  0m1.774s
sys 0m0.006s
```

gcc -O2

```bash
165580141

real  0m0.210s
user  0m0.187s
sys 0m0.003s
```

gcc -O3

```bash
165580141

real  0m0.255s
user  0m0.187s
sys 0m0.003s
```

### go
go version go1.0.2

```go
package main

import "fmt"

func fibonacci(n int) int{
  if (n < 2) {
    return 1
  }
  return fibonacci(n - 2) + fibonacci(n - 1)
}

func main() {
  fmt.Println(fibonacci(40))
}
```

```bash
165580141

real  0m1.755s
user  0m1.664s
sys 0m0.006s
```

### nodejs

```js
function fibonacci(n) {
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(40));
```

v0.4.12

```bash
165580141

real  0m7.576s
user  0m7.216s
sys 0m0.039s
```

v0.6.20

```bash
165580141

real  0m5.282s
user  0m5.001s
sys 0m0.048s
```

v0.8.8

```bash
165580141

real  0m3.008s
user  0m2.832s
sys 0m0.042s
```

### nodejs + cpp module

```js
var fibonacci = require('./build/Release/cppfibonacci').fibonacci;
console.log(fibonacci(40));
```

waf 1.5.16 (7610:7647M)
v0.4.12

```bash
165580141

real  0m3.337s
user  0m3.184s
sys 0m0.026s
```

waf 1.5.16 (7610:7647M)
v0.6.20

```bash
165580141

real  0m3.277s
user  0m3.173s
sys 0m0.023s
```

waf 1.5.16 (7610:7647M)
v0.8.8

```bash
165580141

real  0m3.279s
user  0m3.168s
sys 0m0.020s
```

### luajit
LuaJIT 2.0.0-beta10 -- Copyright (C) 2005-2012 Mike Pall. http://luajit.org/

```lua
function fibonacci(n)
  if n < 2 then
    return 1
  end
  return fibonacci(n - 2) + fibonacci(n - 1)
end

io.write(fibonacci(40), "\n")
```

```bash
165580141

real  0m2.697s
user  0m2.575s
sys 0m0.009s
```

using 'local'

```lua
local function fibonacci(n)
  if n < 2 then
    return 1
  end
  return fibonacci(n - 2) + fibonacci(n - 1)
end

io.write(fibonacci(40), "\n")
```

```bash
165580141

real  0m2.523s
user  0m2.462s
sys 0m0.008s
```

### lua
Lua 5.1.4  Copyright (C) 1994-2008 Lua.org, PUC-Rio

```lua
function fibonacci(n)
  if n < 2 then
    return 1
  end
  return fibonacci(n - 2) + fibonacci(n - 1)
end

io.write(fibonacci(40), "\n")
```

```bash
165580141

real  0m44.095s
user  0m42.944s
sys 0m0.101s
```

using 'local'

```lua
local function fibonacci(n)
  if n < 2 then
    return 1
  end
  return fibonacci(n - 2) + fibonacci(n - 1)
end

io.write(fibonacci(40), "\n")
```

```bash
165580141

real  0m38.479s
user  0m37.655s
sys 0m0.082s
```

### python
Python 2.7.2

```py
def fibonacci(n):
    if n < 2:
        return 1
    return fibonacci(n - 2) + fibonacci(n - 1)
    
print fibonacci(40)
```

```bash
165580141

real  1m21.027s
user  1m19.029s
sys 0m0.200s
```

### php
PHP 5.3.13 with Suhosin-Patch (cli) (built: Jun 20 2012 17:05:20) 

```php
<?php
function fibonacci($n) {
  if ($n < 2) {
    return 1;
  }
  return fibonacci($n - 2) + fibonacci($n - 1);
}
echo fibonacci(40)."\n";
?>
```

```bash
165580141

real  1m46.118s
user  1m43.355s
sys 0m0.250s
```

### perl
This is perl 5, version 12, subversion 4 (v5.12.4) built for darwin-thread-multi-2level

```perl
sub fibonacci {
  my $n = shift;
  if ($n < 2) {
    return 1;
  }
  return fibonacci($n - 2) + fibonacci($n - 1);
}
print fibonacci(40), "\n";
```

```bash
165580141

real  2m33.350s
user  2m30.444s
sys 0m0.340s
```

### ruby
ruby 1.8.7 (2012-02-08 patchlevel 358) [universal-darwin12.0]

```ruby
def fibonacci(n)
  if n < 2
    return 1
  end
  return fibonacci(n - 2) + fibonacci(n - 1)
end

puts fibonacci(40)
```

```bash
165580141

real  3m37.177s
user  3m32.074s
sys 0m0.507s
```

## Conclusion

* **nodejs** is **FAST**, v0.8+ is **FASTER**. 
* **luajit** 2X faster than nodejs@0.6.x, **Shocking**.

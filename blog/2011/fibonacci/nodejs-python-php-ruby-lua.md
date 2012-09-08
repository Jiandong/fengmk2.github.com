# fibonacci(40) benchmark

[Node.js is Cancer](http://teddziuba.com/2011/10/node-js-is-cancer.html) show a wrong way to use nodejs.
But the test code **[Fibonacci](http://en.wikipedia.org/wiki/Fibonacci)** is so funny.
I implement the **fibonacci function** in other **[Dynamic Languages](http://en.wikipedia.org/wiki/Dynamic_programming_language)** for comparison testing.

## Languages

### Dynamic

* [nodejs](http://nodejs.org)
* [nodejs + cpp module](http://kkaefer.github.com/node-cpp-modules)
* [python](http://python.org)
* [pypy](http://pypy.org/): a fast, compliant alternative implementation of the Python language. 
* [perl](http://perl.org) 
* [php](http://www.php.net/)
* [ruby](http://www.ruby-lang.org/)
* [lua](http://www.lua.org/)
* [luajit](http://luajit.org/): a Just-In-Time Compiler for Lua.

### Static

* [c](http://en.wikipedia.org/wiki/C_programming_language)
* [go](http://golang.org/)
* [java](http://www.java.com/)

If you want to help add more dynamic languagues, please leave the **implement code** in comments.

## Results

(^_^) c > java > go > luajit > nodejs > pypy > lua > python > php > perl > ruby (T_T)

<table>
  <tr><th>Language</th><th>Times (user)</th><th>Position</th><th>Version</th></tr>
  <tr>
    <td style="color: green;">c with -O2</td><td>0m0.187s</td><td>#0</td>
    <td>i686-apple-darwin11-llvm-gcc-4.2 (GCC) 4.2.1 <br/>
      (Based on Apple Inc. build 5658) (LLVM build 2336.11.00)
    </td>
  </tr>
  <tr>
    <td style="color: green;">java</td><td>0m1.275s</td><td>#1</td>
    <td>Java(TM) SE Runtime Environment (build 1.6.0_35-b10-428-11M3811)<br/>
      Java HotSpot(TM) 64-Bit Server VM (build 20.10-b01-428, mixed mode)
    </td>
  </tr>
  <tr>
    <td style="color: green;">node + cpp module</td><td>0m1.417s</td><td>#2</td>
    <td>v0.8.8, gcc -O2</td>
  </tr>
  <tr>
    <td style="color: green;">go</td><td>0m1.664s</td><td>#3</td>
    <td>go version go1.0.2</td>
  </tr>
  <tr>
    <td style="color: green;">luajit</td><td>0m2.463s</td><td>#4</td>
    <td>LuaJIT 2.0.0-beta10 -- Copyright (C) 2005-2012 Mike Pall.</td>
  </tr>
  <tr>
    <td style="color: green;">nodejs</td><td>0m2.826s</td><td>#5</td>
    <td>v0.8.8</td>
  </tr>
  <tr>
    <td>pypy</td><td>0m29.650s</td><td>#6</td>
    <td>Python 2.7.2 (341e1e3821ff, Jun 07 2012, 15:42:54) [PyPy 1.9.0 with GCC 4.2.1]</td>
  </tr>
  <tr>
    <td>lua</td><td>0m42.944s</td><td>#7</td>
    <td>Lua 5.1.4 Copyright (C) 1994-2008 Lua.org, PUC-Rio</td>
  </tr>
  <tr>
    <td style="color: red;">python</td><td>1m19.029s</td><td>#8</td>
    <td>Python 2.7.2</td>
  </tr>
  <tr>
    <td style="color: red;">php</td><td>1m43.355s</td><td>#9</td>
    <td>PHP 5.3.13 with Suhosin-Patch (cli) (built: Jun 20 2012 17:05:20)</td>
  </tr>
  <tr>
    <td style="color: red;">perl</td><td>2m30.444s</td><td>#10</td>
    <td>This is perl 5, version 12, subversion 4 (v5.12.4) built for darwin-thread-multi-2level</td>
  </tr>
  <tr>
    <td style="color: red;">ruby</td><td>3m32.074s</td><td>#11</td>
    <td>ruby 1.8.7 (2012-02-08 patchlevel 358) [universal-darwin12.0]</td>
  </tr>
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

real  0m3.908s
user  0m3.884s
sys 0m0.004s
```

gcc -O1

```bash
165580141

real  0m1.783s
user  0m1.773s
sys 0m0.003s
```

gcc -O2

```bash
165580141

real  0m0.192s
user  0m0.185s
sys 0m0.002s
```

gcc -O3

```bash
165580141

real  0m0.199s
user  0m0.187s
sys 0m0.002s
```

### java
java version "1.6.0_35"
Java(TM) SE Runtime Environment (build 1.6.0_35-b10-428-11M3811)
Java HotSpot(TM) 64-Bit Server VM (build 20.10-b01-428, mixed mode)

```java
public class Fibonacci {
  public static int fib(int n) {
    if (n < 2) {
      return 1;
    } else {
     return fib(n - 1) + fib(n - 2);
    }
  }

  public static void main(String[] args) {
    System.out.print(fib(40) + "\n");
  }
}
```

```bash
165580141

real  0m1.434s
user  0m1.275s
sys 0m0.059s
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

real  0m1.686s
user  0m1.666s
sys 0m0.004s
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

real  0m7.252s
user  0m7.211s
sys 0m0.018s
```

v0.6.20

```bash
165580141

real  0m5.152s
user  0m5.127s
sys 0m0.027s
```

v0.8.8

```bash
165580141

real  0m2.894s
user  0m2.826s
sys 0m0.020s
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

real  0m1.474s
user  0m1.427s
sys 0m0.015s
```

waf 1.5.16 (7610:7647M)
v0.6.20

```bash
165580141

real  0m1.444s
user  0m1.420s
sys 0m0.013s
```

waf 1.5.16 (7610:7647M)
v0.8.8

```bash
165580141

real  0m1.436s
user  0m1.417s
sys 0m0.014s
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

real  0m2.582s
user  0m2.547s
sys 0m0.005s
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

real  0m2.470s
user  0m2.463s
sys 0m0.003s
```

### pypy
Python 2.7.2 (341e1e3821ff, Jun 07 2012, 15:42:54)
[PyPy 1.9.0 with GCC 4.2.1]

```py
def fibonacci(n):
    if n < 2:
        return 1
    return fibonacci(n - 2) + fibonacci(n - 1)
    
print fibonacci(40)
```

```bash
165580141

real  0m30.819s
user  0m29.650s
sys 0m0.196s
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

* **go** is **awsome**!
* **nodejs** is **FAST**, v0.8+ is **FASTER**. 
* **luajit** 2X faster than nodejs@0.6.x, **Shocking**.

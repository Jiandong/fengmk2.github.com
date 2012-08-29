# nodejs 遇到的坑

## {} is not Queue

Code come from: [repl_set.js](https://github.com/mongodb/node-mongodb-native/blob/aae83eadad49f97f94d43ecc9c933fcbeb29b3a8/lib/mongodb/connection/repl_set.js#L634)

`ReplSet.connect()`:

```js
  // ... ignore ...

  // De-duplicate any servers
  for(var i = 0; i < this.servers.length; i++) {
    var server = this.servers[i];    
    // Add host information to socket options
    socketOptions['host'] = server.host;
    socketOptions['port'] = server.port;      
    server.socketOptions = socketOptions;
    server.replicasetInstance = this;
    server.enableRecordQueryStats(this.recordQueryStats);
    // If server does not exist set it
    if(addresses[server.host + ":" + server.port] == null) {
      addresses[server.host + ":" + server.port] = server;
    }
  }
  
  // Get the list of servers that is deduplicated and start connecting
  var candidateServers = [];
  for(var key in addresses) {
    candidateServers.push(addresses[key]);
  }
    
  // Let's connect to the first one on the list
  server.connect(parent, 
    {returnIsMasterResults: true, eventReceiver:server}, 
    _connectHandler(this, candidateServers, candidateServers.pop()));
}
```

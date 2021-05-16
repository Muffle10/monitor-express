# monitor-express

An express monitor, with a built in log.

Traces requests and the location where the request was sent.

Generates a monitor.log.json file, and writes to it after every save. 

### How To Use

To access trace middleware

```javascript
var { monitor } = require("monitor-express");
var app = require("express")();
app.use("*", monitor);
```

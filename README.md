# monitor-express

An express-monitor, with a built in log.

Traces requests and gives a choice to save them into a file

### How To Use

To access trace middleware

```javascript
var { monitor } = require("monitor-express");
var app = require("express")();
app.use("*", monitor);
```

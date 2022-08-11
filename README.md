# monitor-express

A fast, simple, lightweight express monitor, with a built in log.

Traces requests and the location where the request was sent.

Generates a monitor.log.json file, and writes to it after every save. 

### How To Use

To access trace middleware

CommonJS:
```javascript
var { monitor } = require("monitor-express");
var app = require("express")();
app.use("*", monitor);
```
ES6:
```javascript
import { monitor } from "monitor-express"
import express from "express"
var app = express()
app.use("*", monitor);
```

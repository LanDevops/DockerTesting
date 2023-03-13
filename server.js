   'use strict';
   var express = require('express');
   var app = express();
   app.get('/', function (req, res) {
     res.send('Hi Syed Good Morning!');
   });
   app.listen(3001, function () {
     console.log('Example app listening on port 3000!');
   });


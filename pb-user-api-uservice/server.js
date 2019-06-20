var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  UserDetails = require('./api/models/User'),
  PayeeDetails = require('./api/models/Payee'),
  BalanceDetails = require('./api/models/Balance'),
  TransferDetails = require('./api/models/Transfer'),  
  bodyParser = require('body-parser'),
  path = require('path'),
  cors = require('cors');

//NOTE that whenever a new route, controller model is added the above details have to be updated along with the below route details

app.use(express.static(__dirname + '/public'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/personal_banking'); 

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/PayeeRoutes');
routes(app);
routes1 = require('./api/routes/UserRoutes');
routes1(app);
routes2 = require('./api/routes/BalanceRoutes');
routes2(app);
routes3 = require('./api/routes/TransferRoutes');
routes3(app);
app.listen(port);


console.log('RESTful API server started on: ' + port);

var mongoose = require('mongoose'),
  BalanceDetails = mongoose.model('Balance');

exports.read_a_balance= function(req, res) {
  BalanceDetails.find({'myAccountId':req.query.myAccountId}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_balance= function(req, res) {
var id = req.params.id
BalanceDetails.findByIdAndUpdate(id, req.body, function(err, task) {
    if(err)
      res.send(err)
    res.json(task);
  });
};

//Note: Balance is automatically created as a balances schema by Mongoose if not already created
//For this application, we will set the intiial balance for the account by manually creating a collection called balances
//Thereafter we will add an initial entry manually to create an amount reflecting the balance

var mongoose = require('mongoose'),
  PayeeDetails = mongoose.model('Payee');

exports.read_a_payee= function(req, res) {
  PayeeDetails.find({'payeeAddress':req.query.payeeAddress}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.add_a_payee= function(req, res) {
  var new_task = new PayeeDetails(req.body);
  new_task.save(function(err, task) {
    if(err)
      res.send(err)
    res.json(task);
  });
};

exports.update_a_payee= function(req, res) {
var id = req.params.id
PayeeDetails.findByIdAndUpdate(id, req.body, function(err, task) {
    if(err)
      res.send(err)
    res.json(task);
  });
};

exports.delete_a_payee= function(req, res) {
var id = req.params.id
PayeeDetails.findByIdAndRemove(id, function(err, task) {
    if(err)
      res.send(err)
    res.json(task);
  });
};


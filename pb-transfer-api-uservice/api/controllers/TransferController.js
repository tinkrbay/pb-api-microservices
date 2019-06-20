var mongoose = require('mongoose'),
  TransferDetails = mongoose.model('Transfer');

exports.read_a_transfer= function(req, res) {
  TransferDetails.find({'myAccountId':req.query.myAccountId}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.add_a_transfer= function(req, res) {
  var new_task = new TransferDetails(req.body);
  new_task.save(function(err, task) {
    if(err)
      res.send(err)
    res.json(task);
  });
};

var mongodb = require('mongodb').MongoClient;
var czndb = null;

var url = 'mongodb://localhost:27017/czn';

mongodb.connect(url, function(err, db) {
  console.log("Connected correctly to server.");
  czndb = db;
});

module.exports.createLab = function(req, res) {
  res.json({"status": "success"});
}


module.exports.getAllLabs = function(req, res) {
  czndb.collection('labs').find(
    {'clg': req.params.institute}
  ).toArray(function(err, docs) {
      res.json(docs);
  });
}

module.exports.getThisLab = function(req, res) {
  czndb.collection('labs').find({'slug': req.params.labslug}).toArray(function(err, docs) {
      res.json(docs[0]);
  });
}

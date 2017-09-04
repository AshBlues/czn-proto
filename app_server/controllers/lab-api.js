var mongodb = require('mongodb').MongoClient;
var czndb = null;

/*var url = process.env.NODE_ENV ?
  'mongodb://heroku_qzvdq0t1:8hr9ba4pik2q5njcddpej2fjgq@ds159033.mlab.com:59033/heroku_qzvdq0t1'
   : 'mongodb://localhost:27017/czn';*/

   var url =
     'mongodb://heroku_qzvdq0t1:8hr9ba4pik2q5njcddpej2fjgq@ds159033.mlab.com:59033/heroku_qzvdq0t1';

mongodb.connect(url, function(err, db) {
  console.log("Connected correctly to server.");
  czndb = db;
});

module.exports.createLab = function(req, res) {
  res.json({"status": "success"});
}


module.exports.getAllLabs = function(req, res) {
  czndb.collection('labs')
    .find({'clg': req.params.institute})
    .toArray(function(err, docs) {
        res.json(docs);
  });
}

module.exports.getThisLab = function(req, res) {
  czndb.collection('labs')
    .find({'slug': req.params.labslug})
    .toArray(function(err, docs) {
      res.json(docs[0]);
  });
}

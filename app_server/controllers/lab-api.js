var mongodb = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var czndb = null;
const _LAB = 'labs',
      _BATCH = 'batches',
      _GROUP = 'groups',
      _SESSION = 'sessions';

var url = process.env.NODE_ENV ?
  'mongodb://heroku_qzvdq0t1:8hr9ba4pik2q5njcddpej2fjgq@ds159033.mlab.com:59033/heroku_qzvdq0t1'
   : 'mongodb://localhost:27017/czn';


mongodb.connect(url, function(err, db) {
  console.log("Connected correctly to db server " + url);
  czndb = db;
});


function cln(col) {
  return czndb.collection(col);
}

module.exports.createLab = function(req, res) {
  var doc = JSON.parse(req.body.doc);
  cln(_LAB).insertOne(doc, function(err, status) {
          res.json({_id: doc._id});
  });

}


module.exports.getAllLabs = function(req, res) {
  cln(_LAB).find({'clg': req.params.institute})
    .toArray(function(err, docs) {
        res.json(docs);
  });
}

module.exports.getThisLab = function(req, res) {
  cln(_LAB).find({'clg': req.params.institute, 'slug': req.params.labslug})
    .toArray(function(err, docs) {
      res.json(docs[0]);
  });
}




module.exports.saveBatch = function(req, res) {
  var doc = JSON.parse(req.body.doc);
  cln(_BATCH).insertOne(doc, function(err, status) {
          res.json({_id: doc._id});
  });
}


module.exports.saveGS = function(req, res) { //GS -> Group and Session
  var doc = JSON.parse(req.body.doc);
  var groupDoc = {};
  groupDoc.batchId = doc.batchId;
  groupDoc.name = doc.name;
  groupDoc.sessions = [];

  cln(_GROUP).insertOne(groupDoc, function(err, status) {
      var sessionDoc = {};
      sessionDoc.grpId = groupDoc._id;
      sessionDoc.year = doc.year;
      sessionDoc.dow = doc.dow;
      sessionDoc.timing = doc.timing;
      sessionDoc.classes = [];
      cln(_SESSION).insertOne(sessionDoc, function(err, status) {
        console.log(err);
        var s = {};
        s[sessionDoc.year] = sessionDoc._id;
        cln(_GROUP).updateOne({_id: new ObjectID(groupDoc._id)},
           {$push: {sessions: s}}, function(err, status) {
          groupDoc.sessions.push(sessionDoc);
          res.json({
            g: groupDoc
          });
        });
      });
  });
}

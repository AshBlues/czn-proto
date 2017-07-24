var title = { title: 'Cozone: Write once, run anywhere!' };

module.exports.index = function(req, res) {
  res.render('index', title);
};


module.exports.dashboard = function(req, res) {
  res.render('dashboard', title);
};


module.exports._dashboard = function(req, res) {
  console.log(req.query);
  res.render('_dashboard', title);
};


module.exports._challeneges = function(req, res) {
  var obj = {
    title: title,
    imgs: ["ff.jpg", "office1.jpg", "user.jpg"],
    chall: ['Ongoing challenges', 'Upcoming Challenges']
  };
  res.render('_challenges', obj);
};


module.exports.challeneges = function(req, res) {
  var obj = {
    title: title,
    imgs: ["ff.jpg", "office1.jpg", "user.jpg"],
    chall: ['Ongoing challenges', 'Upcoming Challenges']
  };
  res.render('challenges', obj);
};

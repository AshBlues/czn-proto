const APP_NAME = "Cozone";


module.exports.index = function(req, res) {
//  console.log(req.params.user);
  console.log(req.params.inst);
  res.render('inst_dashboard', {title: APP_NAME + 'Dashboard'});
};


module.exports.dashboard = function(req, res) {
//  console.log(req.params.user);
  console.log(req.params.inst);
  res.render('inst_dashboard', {title: APP_NAME + 'Dashboard'});
};

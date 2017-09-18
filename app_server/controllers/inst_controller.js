const APP_NAME = "Cozone";


module.exports.index = function(req, res) {
//  console.log(req.params.user);
  res.redirect('dashboard');
};


module.exports.dashboard = function(req, res) {
//  console.log(req.params.user);
  res.render('inst_dashboard', {title: APP_NAME + 'Dashboard'});
};

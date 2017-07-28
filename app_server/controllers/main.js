var title = { title: 'Cozone: Write once, run anywhere!' };
var APP_NAME = "Cozone: ";


module.exports.index = function(req, res) {
  res.redirect('dashboard');
};


module.exports.dashboard = function(req, res) {
  res.render('dashboard', {title: APP_NAME + 'Dashboard'});
};


module.exports._dashboard = function(req, res) {
  res.render('_dashboard', {title: APP_NAME + 'Dashboard'});
};


module.exports._challeneges = function(req, res) {
  res.render('_challenges', __challengeData());
};


module.exports.challeneges = function(req, res) {
  res.render('challenges', __challengeData());
};


module.exports.project = function(req, res) {
  res.render('project', {
    title: APP_NAME + 'Project',
    type: ['my projects', 'submissions'],
    projs: [
      {
        lang: 'Java',
        title: 'Java Beans Practice',
        created_on: '20 July, 2017'
      },
      {
        lang: 'C++',
        title: 'Multi threading Practice',
        created_on: '25 July, 2017'
      },
      {
        lang: 'Java',
        title: 'Java Beans Practice',
        created_on: '20 July, 2017'
      },
      {
        lang: 'C++',
        title: 'Multi threading Practice',
        created_on: '25 July, 2017'
      },
      {
        lang: 'Java',
        title: 'Java Beans Practice',
        created_on: '20 July, 2017'
      },
      {
        lang: 'C++',
        title: 'Multi threading Practice',
        created_on: '25 July, 2017'
      },
      {
        lang: 'Java',
        title: 'Java Beans Practice',
        created_on: '20 July, 2017'
      },
      {
        lang: 'C++',
        title: 'Multi threading Practice',
        created_on: '25 July, 2017'
      }
    ]
  });
};


module.exports.archived_challenges = function(req, res) {
  res.render('archived', __challengeData());
};

function __challengeData() {
  return {
      title: APP_NAME + 'Challenges',
      imgs: ["ff.jpg", "user.jpg", "ff.jpg", "user.jpg", "user.jpg", "ff.jpg"],
      chall: ['Ongoing', 'Upcoming', 'Archived'],
      lang: ["Java", "C", "C++", "Python", "Ruby", "Javascript"],
      complex: ["Easy", "Medium", "Hard"],
      type: ["Hiring", "Lab", "Practice"]
    };
}

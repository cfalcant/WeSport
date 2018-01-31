const home = require("../controllers/home.js");
const teams = require('../controllers/teams.js');
const players = require('../controllers/players.js');
const allstar = require('../controllers/all_star.js');
module.exports = function(app) {

  // HOME :
  app.get('/', home.index);

  app.post('/register', home.register);
  app.post('/login', home.login);
  app.use(authMiddleware);

  // PLAYERS :
  app.get('/players', players.index);
  app.get('/player/:id', players.individual);

  app.post('/player/add', players.add);

  // TEAMS :
  app.get('/teams', teams.index);
  app.get('/team/:id', teams.individual);

  app.post('/team/add', teams.add);
}

function authMiddleware(req, res, next) {
  if (!req.session.user) {
    res.redirect('/')
  } else {
    next();
  }
}
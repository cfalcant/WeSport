const home = require("../controllers/home.js")
const teams = require('../controllers/teams.js');
const allstar = require('../controllers/all_star.js');
const players = require("../controllers/players.js")
module.exports = function(app){

// HOME
  app.get('/', home.index);
  app.post('/register', home.register)
  app.post ('/login', home.login)
  app.use(authMiddleware)

  // PLAYERS
  app.get('/players', players.index)
  app.get('/player/:id', players.individual)
  app.get('/all_star/:id', players.addallstar)
  app.get('/all_star/remove/:id', players.removeallstar)
  app.get('/logout', players.logout)
  app.post('/player/add', players.add)


  //TEAMS
  app.get('/teams', teams.index);
  app.get('/team/:id', teams.individual);
  app.get('/logout', teams.logout);
  app.post('/team/add', teams.add);

  // ALL-STAR
  app.get('/all_star', allstar.index);
  app.get('/all_star/remove/:id', allstar.remove);
  app.get('/logout', allstar.logout);

}

function authMiddleware (req, res, next) {
  if (!req.session.user) {
    res.redirect('/')

  } else {
    next();
  }
}

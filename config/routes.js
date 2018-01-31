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
  app.post('/player/add', players.add)
  app.get('/player/:id', players.individual)
  app.get('/allstar/:id', players.addallstar)

  //TEAMS
  app.get('/teams', teams.index);
  app.get('/team/:id', teams.individual);

  // ALL-STAR
  app.get('/all_star', allstar.index)
  app.get('/all_star/remove/:id', allstar.remove)

}

function authMiddleware (req, res, next) {
  if (!req.session.user) {
    res.redirect('/')

  } else {
    next();
  }
}

//Update the name of the controller below and rename the file.
const home = require("../controllers/home.js")
const teams = require('../controllers/teams.js');
const allstar = require('../controllers/all-star.js');
const players = require("../controllers/players.js")
module.exports = function(app){

  app.get('/', home.index);

  app.post('/register', home.register)

  app.post ('/login', home.login)

  app.get('/players', players.index)

  app.post ('/addPlayer', players.add)

  app.use(authMiddleware)


}

function authMiddleware (req, res, next) {
  if (!req.session.user) {
    res.redirect('/')

  } else {
    next();
  }
}

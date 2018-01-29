const home = require("../controllers/home.js")
module.exports = function(app) {

  // HOME :
  app.get('/', home.index);
  app.post('/register', home.register);
  app.post('/login', home.login);
  app.use(authMiddleware);

}

function authMiddleware(req, res, next) {
  if (!req.session.user) {
    res.redirect('/')
  } else {
    next();
  }
}
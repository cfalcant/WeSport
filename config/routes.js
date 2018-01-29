const home = require("../controllers/home.js")
module.exports = function(app) {

  // HOME :
  app.get('/', home.index);


}

function authMiddleware(req, res, next) {
  if (!req.session.user) {
    res.redirect('/')
  } else {
    next();
  }
}
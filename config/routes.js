//Update the name of the controller below and rename the file.
const home = require("../controllers/home.js")
module.exports = function(app){

  app.get('/', home.index);

  app.post('/register', home.register)

  app.post ('/login', home.login)

  app.use(authMiddleware)


}

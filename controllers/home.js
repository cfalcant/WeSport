const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
        if (!req.session.error) {
       req.session.error = "";
     }
     res.render("home", { error: req.session.error });
   },
   register: function(req, res) {
     knex('users').insert({
       email: req.body.email,
       password: req.body.password
     }).then(() => {
       res.redirect('/');
     })
  },
    login: function(req, res) {
       knex('users')
         .where('email', req.body.email)
         .then((user) => {
           user = user[0];
           if (!user) {
             req.session.error = "Invalid email/password"
             req.session.save(() => {
               res.redirect('/');
               return;
             })
           }

})
},

        if (user.password === req.body.password) {
           req.session.user = user;
           req.session.save(() => {
             //res.redirect('/');
           })
         } else {
           req.session.error = "Invalid email/password"
           req.session.save(() => {
             res.redirect('/');
           })
         }

       }

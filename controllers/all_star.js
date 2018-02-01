const knex = require("../db/knex.js");

module.exports = {

  index: function(req, res) {
    if (!req.session.lineup) {
      req.session.lineup = [];
    }
    knex('teams')
      .then((allteams) => {
        knex('players')
          .then((allplayers) => {
            res.render('all_star', { lineup: req.session.lineup, teams: allteams, players: allplayers })
          })
      })
  },

  remove: function(req, res) {
    let lineup = req.session.lineup;
    if (lineup.length == 1) {
      req.session.lineup = [];
      req.session.save(() => {
        res.redirect('/all_star')
        return;
      })
    } else {
      for (let i = 0; i < lineup.length; i++) {
        if (lineup[i].id == req.params.id) {
          req.session.lineup.splice(i, 1);
          req.session.save(() => {
            res.redirect('/all_star')
          })
        }
      }
    }
  },
  logout: (req, res) => {
    knex('users')
      .update({
        email: req.session.email,
        password: req.session.password,
        lineup: JSON.stringify(req.session.lineup)
      })
      .where('id', req.session.user.id)
      .then((results) => {
        req.session.save((results) => {
          req.session.destroy();
          res.redirect('/')
        })
      })
  },

}
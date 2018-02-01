const knex = require("../db/knex.js");

module.exports = {

  index: (req, res) => {
    knex('teams')
      .then((allteams) => {
        knex('players')
          .then((allplayers) => {
            res.render('teams', { players: allplayers, teams: allteams })
          })
      })
  },

  individual: (req, res) => {
    knex('teams')
      .where('teams.id', req.params.id)
      .then((allteams) => {
        knex('players')
          .then((allplayers) => {
            res.render('individualTeam', { players: allplayers, teams: allteams[0] })
          })
      })
  },

  add: (req, res) => {
    knex('teams')
      .then((allteams) => {
        knex('teams')
          .insert({
            team_name: req.body.team_name,
            head_coach: req.body.head_coach,
            city: req.body.city
          })
          .then((newTeamAdded) => {
            res.render('teams', { teams: allteams })
          })
      })
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
  }

}
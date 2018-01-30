const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('players')
      .then((allplayers) => {
        knex('teams')
          .then((allteams) => {
            res.render('players', { players: allplayers, teams: allteams })
          })
      })
  },

  individual: (req, res) => {
    knex('players')
      .where('players.id', req.params.id)
      .then((allplayers) => {
        knex('teams')
          .then((allteams) => {
            res.render('individualPlayer', { players: allplayers[0], teams: allteams })
          })
      })
  }
}
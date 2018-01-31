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
  },

  add: function(req, res) {
    knex('players')
      .then((allplayers) => {
        knex('teams')
          .then((allteams) => {
            knex('players')
              .insert({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                jersey: req.body.jersey,
                position: req.body.position,
                team_id: req.body.team_id,
                points: req.body.points,
                steals: req.body.steals,
                assists: req.body.assists,
                blocks: req.body.blocks
              })
              .then((newPlayerAdded) => {
                res.render('players', { teams: allteams, players: allplayers })
              })
          })
      })
  },

  addallstar: function(req, res) {
    if (!req.session.lineup) {
      req.session.lineup = [];
    }
    knex('teams')
      .then((allteams) => {
        knex('players')
          .where('id', req.params.id)
          .then((selectedplayer) => {
            req.session.lineup.push(selectedplayer[0]);
            req.session.save(() => {
              res.redirect('/all_star')
            })
          })
      })
  },
}
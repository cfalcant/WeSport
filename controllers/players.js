const knex = require("../db/knex.js");

module.exports = {

  index: (req, res) => {
    if (!req.session.lineup) {
      req.session.lineup = [];
    }
    knex('players')
      .then((allplayers) => {
        knex('teams')
          .then((allteams) => {
            res.render('players', { players: allplayers, teams: allteams, lineup: req.session.lineup })
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
    knex('teams')
      .then((allteams) => {
        knex('players')
          .where('id', req.params.id)
          .then((selectedplayer) => {
            req.session.lineup.push(selectedplayer[0]);
            req.session.save(() => {
              res.redirect('/players')
            })
          })
      })
  },


  removeallstar: function(req, res) {
    let lineup = req.session.lineup;
    if (lineup.length == 1) {
      req.session.lineup = [];
      req.session.save(() => {
        res.redirect('/players');
        return;
      })
    } else {
      for (let i = 0; i < lineup.length; i++) {
        if (lineup[i].id == req.params.id) {
          req.session.lineup.splice(i, 1);
          req.session.save(() => {
            res.redirect('/players')

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
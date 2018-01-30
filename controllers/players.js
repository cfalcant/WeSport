const knex = require("../db/knex.js");

module.exports = {
  index: function (req, res){
    knex('players')
    .then((allplayers)=>{
      knex('teams')
      .then((allteams)=>{
          res.render('players', {players:allplayers, teams:allteams})
      })
    })
  }
}

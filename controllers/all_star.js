const knex = require("../db/knex.js");

module.exports = {
  index: function (req, res) {
    knex('teams')
    .then((allteams)=>{
      res.render('all_star', {lineup:req.session.lineup, teams:allteams})
    })
  },

  remove: function (req, res) {
    let lineup = req.session.lineup;
    if (lineup.length == 1) {
      req.session.lineup = [];
      req.session.save(()=>{
        res.redirect('/all_star');
        return;
      })
      // res.render('all_star')
    } else {
    for (let i = 0; i < lineup.length;i++) {
      if (lineup[i].id == req.params.id) {
        req.session.lineup.splice(i, 1);
        req.session.save(()=>{
          res.redirect('/all_star')
          return;
        })
      }
    }
  }
    // res.redirect('/players');
  },


}

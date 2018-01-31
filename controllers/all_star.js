const knex = require("../db/knex.js");

module.exports = {
  index: function (req, res) {
    res.render('all-star')
  },

  remove: function (req, res) {
    let lineup = req.session.lineup;
    if (lineup.length == 1) {
      req.session.lineup = [];
      // res.redirect('/players');
      res.render('all_star')
      return;
    }
    for (let i = 0; i < lineup.length;i++) {
      if (lineup[i].id == req.params.id) {
        lineup.splice(i, 1);
        res.render('all_star')
        return;
      }
    }
    // res.redirect('/players');
  },


}

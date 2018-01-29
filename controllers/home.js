const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.send("Hello");
  },

}


// index: function(req, res) {
//   if(!req.session.error){
//     req.session.error = "";
//   }
//   res.render("index", {error: req.session.error});
// },
// register: function(req, res){
//   knex('users').insert({
//     name:req.body.name,
//     email:req.body.email,
//     age:req.body.age,
//     password:req.body.password
//   }).then(()=>{
//     res.redirect('/');
//   })
// },
// login: function(req, res){
//   knex('users')
//     .where('email', req.body.email)
//     .then((user)=>{
//       user = user[0];
//       if(!user){
//         req.session.error = "Invalid email/password"
//         req.session.save(()=>{
//           res.redirect('/');
//           return;
//         })
//       }
//
//       if(user.password === req.body.password){
//         req.session.user = user;
//         req.session.save(()=>{
// redirect somewhere
//           res.redirect('/protectedpage');
//         })
//       }else{
//         req.session.error = "Invalid email/password"
//         req.session.save(()=>{
//           res.redirect('/');
//         })
//       }
//
//     })
// },
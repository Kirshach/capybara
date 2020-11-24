const passport = require('passport');
const express = require('express');
const User = require('../models/user.js');
const router = express.Router()


// auth logout
router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  console.log('logout');
  res.redirect('/profile');
})

// auth with google+
router.get('/google', passport.authenticate('google', {
  scope: ['profile'],
}))

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  console.log('from /google/redirect');
  res.redirect('/profile');
})

// locals Strategy
// router.post('/login', 
//   passport.authenticate('local', {  successRedirect: '/profile', failureRedirect: '/' }),
//   function (req, res) {
//     // console.log('from login', req);
//     res.redirect('/profile');
//   });

// const authenticate = passport.authenticate('local', { session: true, successRedirect: '/profile', failureRedirect: '/' });

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/profile' }),
  function (req, res) {
    console.log("from login post");
    res.json({success: true});
  });

router.post('/registration', async (req, res) => {
  const { name, password, email } = req.body;
  console.log(name, password, email);
  try {
    const user = await new User({ name, password, email });
    await user.save();
  } catch (error) {
    console.error(error);
    return res.status(404).end();
  }
  res.status(200).end();
});

module.exports = router


const express = require('express');

const router = express.Router();

router.get('/current_user', (req, res) => {
  // console.log('From /current_user');
  if (!!req.user) {
   return res.json({ name: req.user.name }).end();
  }
  res.status(204).end();
});

module.exports = router;

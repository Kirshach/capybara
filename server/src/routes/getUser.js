const express = require('express');

const router = express.Router();

router.get('/current_user', (req, res) => {
  console.log('From /current_user');
  res.json({ name: req.user.name }).end();
});

module.exports = router;

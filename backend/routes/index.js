const router = require('express').Router();
const portfolio = require('./portfolio');

require('../db/mongoConnection');

router.get('/', (req, res) => {
  res.json({
    success: false,
    message: 'error'
  });
});

router.use("/portfolio", portfolio)

module.exports = router;
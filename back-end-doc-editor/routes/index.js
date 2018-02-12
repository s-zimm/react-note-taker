var express = require('express');
var router = express.Router();
const Note = require('../models/Note');

router.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
})

/* GET home page. */
router.route('/notes')
  .get((req, res) => {
    Note.findAll()
      .then(allNotes => res.json(allNotes));
  })

module.exports = router;

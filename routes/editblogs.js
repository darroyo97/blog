const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let db = require('../models/database');
router.use(bodyParser.urlencoded({ extended: false }));
router.get('/editblogs', (req, res) => {
  db.query('SELECT * FROM categories')
    .then((catResults) => {
      db.query('SELECT * FROM authors')
        .then((authResults) => {
          res.render('editblogs.ejs', {
            authors: authResults,
            categories: catResults
          })
        })
        .catch((error) => {
          console.log("error in authors query: ", error);
        })
    })
    .catch((error) => {
      console.log("error in category query", error);
    })
});
module.exports = router;
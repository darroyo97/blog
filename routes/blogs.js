const express = require('express');
const router = express.Router();
let db = require('../models/database')

router.get('/blogs/:blogID', (req, res) => {
  let blogID = req.params.blogID
  db.query("SELECT * FROM blogs WHERE id=$1", [blogID])
    .then((results) => {
      //result is an array of objects
      res.render('blogs.ejs', {
        blog: results[0]
      })
        .catch((error) => {
          console.log(error)
        })
    })
});

module.exports = router;


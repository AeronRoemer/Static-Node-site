const express = require('express');
const router = express.Router();
//require data for site. express auto parses it
const {data} = require('../data.json');

router.get('/', (req, res) => {
    res.locals.data = data;
    res.render('index', {data});
});

module.exports = router;
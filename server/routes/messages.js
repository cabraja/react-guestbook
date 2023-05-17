const express = require('express');
const router = express.Router();
// KONEKCIJA IZDVOJENA U POSEBNI FAJL
const db = require('../connection.js');

// DOHVATANJE PORUKA
router.get('/', (req, res) => {
    const query = "SELECT * FROM messages LIMIT 10";

    db.query(query, (err,result) => {
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
});

module.exports = router;
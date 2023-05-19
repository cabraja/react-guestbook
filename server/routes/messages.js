const express = require('express');
const router = express.Router();
// KONEKCIJA IZDVOJENA U POSEBNI FAJL
const db = require('../connection.js');


// DOHVATANJE PORUKA
router.get('/', (req, res) => {
    const query = "SELECT * FROM messages ORDER BY date DESC LIMIT 10";

    db.query(query, (err,result) => {
        if(err){
            res.status(500).json({ error: 'An error occurred on the server.' });
        }else{
            res.status(200).json(result);
        }
    })
});


// KREIRANJE PORUKE
router.post('/', (req,res) =>{
    const {message,name} = req.body;
    const query = 'INSERT INTO messages (message,name) VALUES (?, ?)';
    const values = [message,name];

    db.query(query,values,(err,result) => {
        if (err) {
            res.status(500).json({ error: 'An error occurred while adding a message.' });
            return;
          }
      
          res.status(201).json({ message: 'Message added successfully' });
    })
})

module.exports = router;
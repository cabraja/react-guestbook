const express = require('express');
const messagesRouter = require('./routes/messages');

const app = express();

// DOHVATANJE 10 PORUKA
app.use('/api/messages', messagesRouter);


app.listen(5000, () => {console.log("Server started on port 5000.")})
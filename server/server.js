const express = require('express');
const cors = require('cors');
const messagesRouter = require('./routes/messages');

const app = express();
app.use(cors())

// HTTP ENDPOINTS
app.use('/api/messages', messagesRouter);


app.listen(5000, () => {console.log("Server started on port 5000.")})
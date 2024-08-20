// index.js
const express = require('express');
var cors=require('cors')
const connect = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// Connect to MongoDB
connect();
app.use (express.json())
// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start server
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});

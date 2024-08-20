const mongoose = require('mongoose');

// Connect to MongoDB
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/iNotebook');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = connect;

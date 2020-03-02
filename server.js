// Requirements
require('dotenv').config()

const express = require('express')
const app = express();
const mongoose = require('mongoose')



// Database - Mongoose 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

// Middleware - express
app.use(express.json())


const watchlistRouter = require('./routes/watchlist')
app.use('/watchlist', watchlistRouter)

app.get('/', (req, res) => {
    res.send("Homepage")
});





app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});
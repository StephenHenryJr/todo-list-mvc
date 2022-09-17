// We are using Express
const express = require('express')
const app = express()
// Assigns our DB from our config file
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

//Gives us access to our DB string in our .env file which
// we need in order to connect to our Mongodb via Mongoose
require('dotenv').config({path: './config/.env'})
//Calling our function that we required to connect to our DB
connectDB()

const PORT = process.env.PORT;

// Telling server we're using EJS view engine
app.set('view engine', 'ejs') 
// Hosts all of our static files in our public folder
app.use(express.static('public'))
// Allows us to access data from the request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Telling express which routes to use
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running, you better catch it!`)
})    
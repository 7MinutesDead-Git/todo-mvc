const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')
const testRoutes = require('./routes/test')

require('dotenv').config({path: './config/.env'})

const PORT = process.env.PORT || 3333

function setupMiddleware() {
    app.use(express.static('public'))
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
}

function setupRoutes() {
    app.use('/', homeRoutes)
    app.use('/todos', todoRoutes)
    app.use('/test', testRoutes)
}

function setViewEngine() {
    app.set('view engine', 'ejs')
}

async function start() {
    await connectDB()
    setupMiddleware()
    setupRoutes()
    setViewEngine()

    app.listen(PORT, ()=> {
        console.log(`Express server is running on port ${PORT}`)
    })
}

start()
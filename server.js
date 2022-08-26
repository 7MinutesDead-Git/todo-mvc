const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')
const testRoutes = require('./routes/test')

require('dotenv').config({path: './config/.env'})

const PORT = process.env.PORT || 3333
await connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
app.use('/test', testRoutes)
 
app.listen(PORT, ()=> {
    console.log(`Express server is running on port ${PORT}`)
})
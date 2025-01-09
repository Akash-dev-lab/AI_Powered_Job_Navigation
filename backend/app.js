const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const adminRoutes = require('./routes/admin.routes');
const jobRoutes = require('./routes/job.routes');

connectToDb()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(morgan('dev'))

app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.use('/users', userRoutes)
app.use('/admin', adminRoutes)
app.use('/job', jobRoutes)

module.exports = app
const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express();

// Middleware for viewing body of request
app.use(express.json())
// urlencoded because thats what we use in postman
app.use(express.urlencoded({extended: false}))


app.use('/api/reports', require('./routes/reportRoutes'))

// overwrite default express error handler 
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
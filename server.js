const express = require('express')

const serveStatic = require('serve-static')

const path = require('path')


//Create the express application

const app = express()


//Create Middleware to handle ther serving of the application
//Setting up the root route

app.use('/', serveStatic(path.join(__dirname, '/public')))


//Create default port to serve the application

const port = process.env.PORT || 5000
app.listen(port)


console.log('server started on port ' + port)

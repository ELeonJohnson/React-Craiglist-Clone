const express = require('express')

const serveStatic = require('serve-static')

const path = require('path')

const categoriesData = require('./data/categories.js')


//Create the express application

const app = express()


//Create Middleware to handle ther serving of the application
//Setting up the root route

app.use('/', serveStatic(path.join(__dirname, '/public')))

app.get('/api/categories', function(req, res){
  res.json(categoriesData)
})


app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

//Create default port to serve the application

const port = process.env.PORT || 5000
app.listen(port)


console.log('server started on port ' + port)

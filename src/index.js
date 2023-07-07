const express = require('express');

const app = express();

const path = require('path');

// settings
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

// Middlewares


// Routes
/* app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '/views/index.html'))
  // console.log(path.join(__dirname,'/views/index.html'))
  res.render('index', { title: 'First Node Website!' })
}) */
app.use(require('./routes/index'))

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// Listening the Server
app.listen(app.get('port'), () => {
  console.log(`Server on Port: ${app.get('port')}`)
});
const express = require('express');
const db = require('./models');
const config = require('./config/config');

const users = require('./routes/user');
const services = require('./routes/service');
const auth = require('./routes/auth');
const reviews = require('./routes/review');
const blogs = require('./routes/blog');
// const home = require('./routes/blog');

const app = express();

// This allows the server to parse incoming requests with JSON
app.use(express.json())
// This allows the server to parse incoming requests with url-encoded data
app.use(express.urlencoded({extended: true}));

// Use routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api', services);
app.use('/api', reviews);
app.use('/api', blogs);
// app.use('/api', home);

app.get('/test', (req, res) => {
  console.log('/test - get');
  res.send('I am a server and I am up and running WOO!');
})

app.get('/', (req, res) => {
  console.log('/ - get');
  res.send('Home Page');
})

db.sequelize.sync().then(() => {
  app.listen(config.port,
    console.log(`Server is running on port: ${config.port}`)
  );
});


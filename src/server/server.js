const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const {userController} = require('./db_controllers/User');
const gameController = require('./db_controllers/Game')

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).send('Server has been reached');
});

app.post('/create-game', gameController.createGame, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
})

app.post('/signup', userController.createUser, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

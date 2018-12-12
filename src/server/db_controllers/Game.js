const dbUri = 'postgres://nfqxgbem:22Y05ReHjKco1ky_s8ZkAwjZ_r-XigMW@pellefant.db.elephantsql.com:5432/nfqxgbem';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbUri);
const {User} = require('./User');
const gameController = {};

const Game = sequelize.define('games', {
  playerOne: Sequelize.INTEGER,
  playerTwo: Sequelize.INTEGER,
  winner: Sequelize.STRING,
  loser: Sequelize.STRING,
  scoreOne: Sequelize.INTEGER,
  scoreTwo: Sequelize.INTEGER
}, { timestamps: false });

// Game.hasMany(User);
// User.belongsTo(Game);

gameController.createGame = (req, res, next) => {
  console.log('THIS IS A REQ: ', req.body);
  Game.create({
    playerOne: Number(req.body.playerOneId),
    playerTwo: Number(req.body.playerTwoId),
    winner: req.body.winner,
    loser: req.body.loser,
    scoreOne: Number(req.body.playerOneScore),
    scoreTwo: Number(req.body.playerTwoScore)
  }).then(response => {
    console.log('This is the response', response);
    res.locals.game = response;
    next();
  }).catch(err => {
    console.log(err);
    res.send(err);
  });;
}

module.exports = gameController;
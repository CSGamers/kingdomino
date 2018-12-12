const dbUri = 'postgres://nfqxgbem:22Y05ReHjKco1ky_s8ZkAwjZ_r-XigMW@pellefant.db.elephantsql.com:5432/nfqxgbem';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbUri);
const userController = {}

sequelize.authenticate().then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.log('fail to connect to database: ', err);
});

const User = sequelize.define('users', {
  userName: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING
}, { timestamps: false });

userController.createUser = (req, res, next) => {
  console.log('This is the body', req.body);
  User.create({
    userName: req.body.userName,
    password: req.body.password
  }).then(response => {
    res.locals.user = response;
    next();
  }).catch(err => {
    console.log(err);
  });
}

module.exports = {
  userController,
  User
};
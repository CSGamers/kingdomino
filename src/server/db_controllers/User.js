const dbUri = 'postgres://nfqxgbem:22Y05ReHjKco1ky_s8ZkAwjZ_r-XigMW@pellefant.db.elephantsql.com:5432/nfqxgbem';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbUri);

sequelize.authenticate().then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.log('fail to connect to database: ', err);
});

const User = sequelize.define('users', {
  _id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    automIncrement: true
  },
  userName: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING
});

User.create({
  userName: req.userName,
  password: password
}, () => {
  console.log('it reached');
});
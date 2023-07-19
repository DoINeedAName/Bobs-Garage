const {Sequelize, DataTypes} = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');

let db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

// Home model
const Home = sequelize.define('Home', {
  I_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  image: {type: DataTypes.STRING}
})

// Service model
const Service = sequelize.define('Service',
  {
    S_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER}
  }
);

// User model
const User = sequelize.define('User',
  {
    U_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {type: DataTypes.STRING},
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }
);

// Review model
const Review = sequelize.define('Review',
  { 
    R_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {type: DataTypes.STRING},
    heading: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER}
  }
);

// Blog model
const Blog = sequelize.define('Blog',
  {
    B_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    image: {type: DataTypes.STRING},
    heading: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
  }
);

// Signs token
User.prototype.signToken = function(payload){
  const token = jwt.sign(
    payload, 
    config.authentication.jwtSecret, {
    expiresIn: '2w'
  });
  return token;
};

// Hashes password
User.prototype.hashPwd = async function(password, salt) {
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
module.exports.Op = Sequelize.Op;
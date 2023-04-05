const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const Candy = sequelize.define("candies", {
    candy: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    }
 },{
    timestamps: false
 });

module.exports = Candy;
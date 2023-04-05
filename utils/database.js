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

sequelize.sync().then(() => {
   console.log('Book table created successfully!');

   Candy.create({
    candy: "Clean Code",
    description: "Robert Cecil Martin",
    price: 2,
    quantity: 3
   }).then(res => {
       console.log(res)
   }).catch((error) => {
       console.error('Failed to create a new record : ', error);
   });

}).catch((error) => {
   console.error('Unable to create table : ', error);
});
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: {
        name: 'users_email',
        msg: 'A user with this email exists already'
      },
      validate: {
        notEmpty: true,
        isEmail: true
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Comment, { onUpdate: 'cascade', onDelete: 'cascade', hooks: true });
    User.hasMany(models.Emoji, { onUpdate: 'cascade', onDelete: 'cascade', hooks: true });
  };
  return User;
};
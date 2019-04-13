'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING

  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Comment, { onUpdate: 'cascade', onDelete: 'cascade', hooks: true });
    User.hasMany(models.Emoji, { onUpdate: 'cascade', onDelete: 'cascade', hooks: true });
  };
  return User;
};
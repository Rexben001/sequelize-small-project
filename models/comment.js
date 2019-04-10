'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    post: DataTypes.STRING,
    reaction: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User);
  };
  return Comment;
};
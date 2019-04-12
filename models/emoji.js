'use strict';
module.exports = (sequelize, DataTypes) => {
  const Emoji = sequelize.define('Emoji', {
    emoji: DataTypes.INTEGER
  }, {});
  Emoji.associate = function(models) {
    // associations can be defined here
    Emoji.belongsTo(models.Comment);
    Emoji.belongsTo(models.User);
  };
  return Emoji;
};
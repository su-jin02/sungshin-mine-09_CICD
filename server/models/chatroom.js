const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const chatroom = sequelize.define(
    "chatroom",
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      cobuying_room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      host_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      guest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "chatroom",
      timestamps: false,
    }
  );
  return chatroom;
};

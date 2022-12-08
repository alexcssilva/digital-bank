module.exports = {
  sequelize: {
    drop: "npx sequelize-cli db:drop",
    create: "npx sequelize-cli db:create",
    migrate: "npx sequelize-cli db:migrate",
  },
  apiURL: "http://localhost:3001",
};

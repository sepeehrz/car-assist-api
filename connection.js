import { Sequelize } from "sequelize";

const sequelize = new Sequelize("car_assist", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.error("Failed to synchronize database:", error);
  });

export default sequelize;

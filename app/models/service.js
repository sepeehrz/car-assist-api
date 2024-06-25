import sequelize from "../../connection.js";
import { DataTypes, Model } from "sequelize";

class Service extends Model {}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    car_id: {
      type: DataTypes.INTEGER,
    },
    service_type: {
      type: DataTypes.INTEGER,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
    sequelize,
    modelName: "Service",
  }
);


export default Service;

import sequelize from "../connection.js";
import { DataTypes, Model } from "sequelize";

class ServiceType extends Model {}

ServiceType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
    sequelize,
    modelName: "ServiceType",
  }
);

export default ServiceType;

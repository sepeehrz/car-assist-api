import sequelize from "../../connection.js";
import { DataTypes, Model } from "sequelize";
import Service from './service.js'

class Car extends Model {}

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    underscored: true,
    sequelize,
    modelName: "Car",
  }
);
// Car.hasMany(Service,{
//   foreignKey: 'car_id',
// });
// Service.belongsTo(Car);

export default Car;

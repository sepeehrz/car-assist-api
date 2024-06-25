import sequelize from "../../connection.js";
import { DataTypes, Model } from "sequelize";
import useBcrypt from "sequelize-bcrypt";
import Car from './car.js'
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    family: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    natioanl_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    underscored: true,
    sequelize,
    modelName: "User",
  }
);
useBcrypt(User, {
  field: "password",
  rounds: 12,
  compare: "authenticate",
});

// User.hasMany(Car,{
//   foreignKey: 'user_id',
// });
// Car.belongsTo(User);


export default User;

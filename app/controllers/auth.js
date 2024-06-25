import Users from "../models/user.js";
import {generateAccessToken} from '../helpers/generateToken.js'

class AuthController {
   static async register(request, response) {
    const userInformation = request.body;

    // check user exist
    const userExist = await Users.findOne({
      where: { username: userInformation.username },
    });
    if (userExist) {
      return response.status(409).json({ message: "user exist" });
    }
    // save user on data base
    const savedUser = await Users.create(userInformation);

    if (savedUser) {
      return response.status(200).json({ message: "success", data: savedUser });
    } else {
      return response.status(422).json({ message: "unsuccess" });
    }
  }
  static  async login(request, response) {
    const { username, password } = request.body;
    const user = await Users.findOne({ where: { username: username } });

    if (!user.password) {
      return response.status(409).json({ message: "user doesnt exist" });
    }
    const auth = user.authenticate(password);
    if (auth) {
      const token = generateAccessToken(user.dataValues)
      return response.status(200).json({ message: "success", token: token});
    } else {
      return response.status(422).json({ message: "پسورد اشتباه است" });
    }
  }
 
}

export default AuthController;

import Users from "../models/user.js";
class UserController {
  static async getAllUsers(request, response) {
    try {
      const users = await Users.findAll();
      response.json(users);
    } catch (error) {
      response.status(500).json({ message: "Failed to fetch users." });
    }
  }
  static async getSpecificUser(request, response) {
    try {
      const user = await Users.findByPk(request.params.id);
      if (!user) {
        response.status(404).json({ message: "User not found." });
      } else {
        response.json(user);
      }
    } catch (error) {
      response.status(500).json({ message: "Failed to fetch user." });
    }
  }
}

export default UserController;

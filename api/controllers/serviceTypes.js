import ServiceType from "../models/serviceType.js";

class ServiceTypesController {
  static async index(request,response) {
    const data = await ServiceType.findAll();
    if (data && data.length !== 0) {
      return response.status(200).json({ message: "success", data: data });
    } else {
      return response.status(500).json({ message: "Failed to fetch services." });
    }
  }
  static async store(request, response) {
    const requestData = request.body;
    const data = await ServiceType.create(requestData);
    if (data) {
      return response.status(200).json({ message: "success", data: data });
    } else {
      return response.status(422).json({ message: "unsuccess" });
    }
  }
}

export default ServiceTypesController;

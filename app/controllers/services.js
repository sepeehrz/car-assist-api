import Services from "../models/service.js";

class ServicesController {
  static async index(request,response) {
    const allData = await Services.findAll();
    if (allData && allData.length !== 0) {
      let data = []
      for(const item of allData){
        data.push({
          id:item.id,
          data:JSON.parse(item.data),
          createdAt:item.createdAt,
          updatedAt:item.updatedAt,
          service_type:item.service_type,
          car_id:item.car_id
        })

      }
      return response.status(200).json({ message: "success", data: data });
    } else {
      return response.status(500).json({ message: "Failed to fetch services." });
    }
  }
  static async store(request, response) {
    const requestData = request.body;
    const result = await Services.create(requestData);
    if (result) {
      return response.status(200).json({ message: "success", data: result });
    } else {
      return response.status(422).json({ message: "unsuccess" });
    }
  }
  static async show(request, response) {
    const item = await Services.findOne({
      where: { id: request.params.id },
    });
    if (item) {
      const data = {
        id:item.id,
        data:JSON.parse(item.dataValues.data),
        createdAt:item.createdAt,
        updatedAt:item.updatedAt,
        service_type:item.service_type,
        car_id:item.car_id
      }
      return response.status(200).json({ message: "success", data: data });
    } else {
      return response.status(404).json({ message: "Car not found." });
    }
  }
  static async update(request, response) {
    const newData = request.body;
    const data = await Services.findOne({
      where: { id: request.params.id },
    });
    if (data) {
      await data.update(newData);
      const result = await data.save();
      return response.status(200).json({ message: "success", data: result });
    } else {
      return response.status(404).json({ message: "Car not found." });
    }
  }
  static async destroy(request, response) {
    const data = await Services.findOne({
      where: { id: request.params.id },
    });
    if (data) {
      const result  = await data.destroy();
      return response.status(200).json({ message: "success", data: result });
    } else {
      return response.status(404).json({ message: "Car not found." });
    }
  }
}

export default ServicesController;

import Cars from "../models/car.js";

class CarController {
  static async index(request,response) {
    const cars = await Cars.findAll();
    if (cars && cars.length !== 0) {
      return response.status(200).json({ message: "success", data: cars });
    } else {
      return response.status(500).json({ message: "Failed to fetch Cars." });
    }
  }
  static async store(request, response) {
    const carInformation = request.body;
    carInformation.user_id = request.user.id

    const savedCar = await Cars.create(carInformation);
    if (savedCar) {
      return response.status(200).json({ message: "success", data: savedCar });
    } else {
      return response.status(422).json({ message: "unsuccess" });
    }
  }
  static async show(request, response) {
    const car = await Cars.findOne({
      where: { id: request.params.id },
    });
    if (car) {
      return response.status(200).json({ message: "success", data: car });
    } else {
      return response.status(404).json({ message: "Car not found." });
    }
  }
  static async update(request, response) {
    const newData = request.body;

    const data = await Cars.findOne({
      where: { id: request.params.id },
    });
    if (data) {
      const updatedData = {
        name: newData.name,
        model: newData.model,
        color: newData.color,
        type: newData.type,
        user_id:request.user.id
      };
      await data.update(updatedData);
      const result = await data.save();
      return response.status(200).json({ message: "success", data: result });
    } else {
      return response.status(404).json({ message: "Car not found." });
    }
  }
  static async destroy(request, response) {
    const data = await Cars.findOne({
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

export default CarController;

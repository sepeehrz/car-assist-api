import userRoutes from "./users.js";
import authRoutes from "./auth.js";
import carsRoutes from './cars.js'
import servicesRoutes from './services.js'
import serviceTypesRoutes from './serviceTypes.js'

function handleRouters(app) {
  app.use("/users", userRoutes);
  app.use("/auth", authRoutes);
  app.use("/cars", carsRoutes);
  app.use("/services", servicesRoutes);
  app.use("/service_type", serviceTypesRoutes);
}

export default handleRouters;

import jwt from "jsonwebtoken";

function auth(request, response, next) {
  const token = request.header("authorization");
  if (!token) {
    return response.status(403).json({ message: "user not authorize" });
  }
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return response.status(403).json({ message: "verification faild" });
    }
    request.user = user
  });
  next();
}

export default auth;

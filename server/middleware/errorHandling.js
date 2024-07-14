function errorHandling(err, req, res, next) {
  console.log(err, "ini dari error handling");
  let errors = [];
  let statusCode = 500;
  if (err.name === "LOGIN_FAILED") {
    statusCode = 400;
    errors.push("Invalid Email Or Password");
  } else if (err.name === "JsonWebTokenrror") {
    statusCode = 400;
    errors.push("Invalid Json Web Token");
  } else if (err.name === "SequelizeConnectionError") {
    statusCode = 400;
    errors.push("Database Not Found");
  } else if (err.name === "AUTHENTICATION_FAILED") {
    statusCode = 401;
    errors.push("Failed To Authenticate");
  } else if (err.name === "AUTHORIZATION_FAILED") {
    statusCode = 403;
    errors.push("Access For Bidden");
  } else if (err.name === "DATA_NOT_FOUND") {
    statusCode = 404;
    errors.push("Data Not Found");
  } else if (err.name === "SequelizeValidationError") {
    statusCode = 400;
    err.errors.forEach((item) => {
      errors.push(item.message);
    });
  } else {
    errors.push(err.message);
  }
  res.status(statusCode).json({ errors });
}

module.exports = errorHandling;

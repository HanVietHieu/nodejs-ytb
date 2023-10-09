const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = req.statusCode ? res.statusCode : 500;
  res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validate Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
      res.json({
        title: "Un authorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "For Bidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("No error, All good chop!");
      break;
  }
};

module.exports = errorHandler;

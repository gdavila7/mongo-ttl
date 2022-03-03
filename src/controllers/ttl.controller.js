const logsModel = require("../models/LogsModel.js");

const createLog = async (req, res) => {
  console.log("en createLog func");
  const { expireAt, message, counter } = req.body;

  console.log(expireAt);
  console.log(message);
  console.log(counter);

  const newLog = new logsModel({
    expireAt: expireAt,
    message: message,
    counter: counter,
  });

  const logSaved = await newLog.save();
  res.status(201).json(logSaved);
};

module.exports = createLog;

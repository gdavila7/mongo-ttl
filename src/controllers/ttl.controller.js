const logsModel = require("../models/LogsModel.js");

const createLog = async (req, res) => {
  const { expireAt, message, counter } = req.body;

  const newLog = new logsModel({
    expireAt: expireAt,
    message: message,
    counter: counter,
  });

  const logSaved = await newLog.save();
  res.status(201).json(logSaved);
};

const getLogs = async (req, res) => {
  const logs = await logsModel.find();
  res.json(logs);
};

module.exports = {
  createLog,
  getLogs,
};

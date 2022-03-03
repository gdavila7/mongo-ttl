const mongodb = require("@condor-labs/mongodb")();

const logsSchema = new mongodb.mongoose.Schema(
  {
    expireAt: { type: Date, required: false },
    message: { type: String, required: false, default: "logs message" },
    counter: { type: Number, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const logsModel = mongodb.mongoose.model("logs", logsSchema);

module.exports = logsModel;

require("dotenv").config({ path: ".env" });

const mongoDbSettings = {
  connectionName: process.env.CONNECTION_NAME,
  host: process.env.DB_URL,
  port: process.env.PORT,
  ssl: process.env.SSL,
  user: "gdavila",
  password: process.env.PASS,
  database: process.env.DATABASE,
  authSource: process.env.AUTH_SOURCE,
};

const mongodb = require("@condor-labs/mongodb")(mongoDbSettings);

module.exports = mongodb;

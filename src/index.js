const express = require("express");
const mongodb = require("./helpers/mongoHelper.cjs");
const ttlogs = require("./routes/ttl.routes.js");
const logger = require("@condor-labs/logger");

mongodb
  .getClient()
  .then(() => logger.info("Db is connect"))
  .catch((err) => {
    logger.info("--- Db connection error ---");
    logger.err(err);
  });

const app = express();
app.use(express.json());

app.use("/ttlogs", ttlogs);

app.listen(7000, () => logger.info("server on port 7000"));

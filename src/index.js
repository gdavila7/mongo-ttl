const express = require("express");
const mongodb = require("./helpers/mongoHelper.cjs");
const ttlogs = require("./routes/ttl.routes.js");

mongodb
  .getClient()
  .then(() => console.log("Db is connect"))
  .catch((err) => {
    console.log("--- Db connection error ---");
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use("/ttlogs", ttlogs);

app.listen(4000, () => console.log("server on port 4000"));

const mongoose = require("mongoose");

const connect = async () => {
  const db = await mongoose.connect(process.env.DATABASE);
  if (db.connection) {
    console.log(
      "Connection established",
      db.connection.host,
      db.connection.port,
      db.connection.name
    );
  } else {
    console.log("Connection not established");
  }
};

module.exports = connect;

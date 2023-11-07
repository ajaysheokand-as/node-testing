const express = require("express");
const connect = require("./connection/dbConnection");
const { addUser } = require("./controllers/userController");
const app = express();
const PORT = process.env.PORT || 4000;
const obj = {
  name: "test",
  address: "localhost",
  contact: "234567890",
};
app.get("/parveen", (req, res) => {
  res.status(200);
  res.send(obj);
});

// Function for establish the connection
connect();

// Middleware to parse the request body
app.use(express.json());

// For the Server
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

// API without using routes
app.post("/addUsers", addUser);
app.post("/testing", (req, res) => {
  res.send("Testing Successful");
});
// app.post("./addUserWithoutRoutes", async (req, res) => {
//   console.log("req.body=>", req.body);
//   const addUser = await addUser.create(req.body);
//   if (addUser) {
//   }
// });

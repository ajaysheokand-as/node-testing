const userModel = require("../models/userModel");

const addUser = async (req, res) => {
  console.log("addUser Req.body=>", req.body);

  const addData = await userModel.create(req.body);
  if (addData) {
    console.log("addData=>", addData);
    res.status(201).send({
      message: "User added successfully",
      user: addData,
    });
  } else {
    res.status(403).send({
      message: "User not added",
    });
  }
};

module.exports = { addUser };

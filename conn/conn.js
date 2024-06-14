const mongoose = require("mongoose");
const conn = async (req, res) => {
  try {
    await mongoose
      .connect("mongodb+srv://task:LZozG7B7suEJALS1@cluster0.elkiquf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();

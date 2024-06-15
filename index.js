const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
const userRouter = require("./routes/routes");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(userRouter);

mongoose.connect("mongodb://localhost:27017/auth").then(() => {
  console.log("Db Connected!");

  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});



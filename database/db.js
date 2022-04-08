const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.ifbro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
    .then(() => console.log("MongoDB Atlas Connected!"))
    .catch((err) => console.log(err));
};

module.exports = connectDB; 
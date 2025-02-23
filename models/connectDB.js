const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0kwab.mongodb.net/sang1?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.0kwab.mongodb.net/sang1?retryWrites=true&w=majority`
// mongoose.connect("mongodb://localhost/k20-duan");

module.exports = mongoose;

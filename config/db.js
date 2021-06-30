const mognoose = require("mongoose");

const connectDB = async () => {
  await mognoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  console.log("mongoDB connected");
};

module.exports = connectDB;

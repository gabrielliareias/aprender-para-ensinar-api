const mongoose = require("mongoose");
const DATABASE_MONGO = process.env.DATABASE_MONGO
mongoose.set("strictQuery", false);


const connect = async () => {
  try {
    mongoose.connect(DATABASE_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database foi conectada com sucesso!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
};


require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URL)
  .then((db) => {
    console.log(`[MongoDB connected]: ${db.connection.host}`);
  })
  .catch((err) => {
    console.error(`[Unable to connect to MongoDB]: ${err.message}`);
    process.exit(1);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

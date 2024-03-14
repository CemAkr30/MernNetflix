const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth"); // Import the auth route
const userRoute = require("./routes/users"); // Import the user route
const movieRoute = require("./routes/movies"); // Import the movie route
const listRoute = require("./routes/lists"); // Import the list route

dotenv.config(); // This allows us to use the .env file to store our environment variables

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true, // Bu sayede MongoDB'de bir kullanıcı oluşturduğumuzda, bu kullanıcıya ait bir id oluşturulacak
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Error:", err.message));

app.use(express.json()); // Bu sayede requestlerin body'sini parse edebileceğiz
app.use(cors()); // This allows us to make requests from our frontend to our backend

app.use("/api/auth", authRoute); // This will prefix all of our auth routes with /api/auth
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});

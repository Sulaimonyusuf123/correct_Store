const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/Database.js");
const cors = require("cors");
const router = require("./Routes/UserRoutes.js");
// const Route = require('./Routes/AdminRoutes.js')

dotenv.config();

const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/api/books', router);
// app.use(Route)



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

connectDB();

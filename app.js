const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const errorMiddleware = require("./middlewares/errors");
const ErrorHandler = require("./utils/errorHandler"); //manage unhandle route - part 1

const PORT = process.env.PORT;
//==============================================================
//Setup
//==============================================================
//setting up config.env file variables
dotenv.config({ path: "./config/config.env" });

// Set up body parser
app.use(express.json());

// Set cookie parser
app.use(cookieParser());

// Set up CORS - Accessible by other domains
app.use(cors());

const auth = require("./routes/auth");
const user = require("./routes/user");

app.use(auth);
app.use(user);

//manage unhandle route - part 2 (put it after all the routes !!!!! e.g. of routes = app.use(jobs);)
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`${req.originalUrl} route not found`, 404));
});

//Middleware to handle errors
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});

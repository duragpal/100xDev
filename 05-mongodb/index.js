const express = require("express");
const bodyParser = require("body-parser");
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");
const app = express();

//Middlewares for request
app.use(bodyParser.json());
app.use("/admin", adminRoute);
app.use("/user", userRoute);

const PORT = 3000;
app.listen(PORT);

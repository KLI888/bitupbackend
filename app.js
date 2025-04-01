const express = require("express")
const body_parser = require("body-parser");
const UserRouter = require("./routers/user.router")
const KitchenTypeRouter = require("./routers/kitehcnType.router")
const KitchenRouter = require("./routers/kitchen.router")
const app = express();

app.use(body_parser.json())

app.use("/api/users", UserRouter); 
app.use("/api/kitchenType", KitchenTypeRouter);
app.use("/api/kitchen", KitchenRouter);
module.exports = app
const express = require("express")
const body_parser = require("body-parser");
const UserRouter = require("./routers/user.router")
const KitchenTypeRouter = require("./routers/kitehcnType.router")
const KitchenRouter = require("./routers/kitchen.router")
const ThalisRouter = require("./routers/thali.router")
const OrderRouter = require("./routers/order.router")
const AddressRouter = require("./routers/address.router")


const app = express();

app.use(body_parser.json())

app.use("/api/users", UserRouter); 
app.use("/api/kitchenType", KitchenTypeRouter);
app.use("/api/kitchen", KitchenRouter);
app.use("/api/thalis", ThalisRouter);
app.use("/api/order", OrderRouter);
app.use("/api/address", AddressRouter);

module.exports = app



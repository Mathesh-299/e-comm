const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, ".env") })
const port = process.env.PORT || 8000
const node_env = process.env.NODE_ENV;
const connectionData = require("./Database");
app.use(express.json());
connectionData();
const product = require("./routes/productRouter");
const order = require("./routes/order");
app.use("/api/v1", product);
app.use("/api/v1", order);
app.listen(process.env.PORT, () => {
    console.log(`Server listening at the port of ${port} on ${node_env}`);
})
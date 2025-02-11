const orderModel = require("../models/orderModel")

exports.createOrder = async (req, res, next) => {
    const carItems = req.body;
    const amount = Number(carItems.reduce((acc, item) => (acc + item.products.price * item.qty), 0)).toFixed(2);
    const status = "pending";
    const order = await orderModel.create({ carItems, amount, status })
    res.status(200).json({
        success: true,
        order
    })
}
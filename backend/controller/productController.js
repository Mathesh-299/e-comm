const productModel = require('../models/prodectModel');


exports.getProducts = async (req, res, next) => {
    const products = await productModel.find({});
    res.json({
        success: true,
        products
    })
}
exports.getSingleProducts = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            res.status(404).json({
                success: false,
                message: 'Product not found'
            })
        }
        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }

}
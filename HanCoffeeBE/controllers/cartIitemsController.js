import cartItemsModel from "../models/cartItemsModel.js"

// add product to cart
const addToCart = async (req, res) => {
    const cartItem = new cartItemsModel({
        cart: req.body.cart.id,
        product: req.body.product,
        quantity: req.body.quantity,
        size: req.body.size,
    })
    try {
        await cartItem.save();
        res.json({ success: true, message: "Added product to cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })

    }
}
//remove product from cart
const removeFromCart = async () => {
    try {

    } catch (error) {

    }
}

export { addToCart, removeFromCart }
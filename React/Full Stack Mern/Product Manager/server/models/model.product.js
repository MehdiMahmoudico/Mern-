const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "{PATH} is required"]
    },
    price : {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [0,"{PATH} minimum 0"],
    },
    description : {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [10,"{PATH} minimum 10"],
    }
},{timestamps: true});

const product = mongoose.model("Product", productSchema);

module.exports = product;
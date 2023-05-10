const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product name is required"],
        trim:true,
    },
    price:{
        type:Number,
        required:[true,"Product price is required"],
        trim:true,
    },
    description:{
        type:String,
        required:[true,"Product description is required"],
        trim:true,
    },
    countInStock:{
        type:Number,
        required:[true,"Product countInStock is required"],
        trim:true,
    },
    imageUrl:{
        type:String,
        required:[true,"Product imageUrl is required"],
        trim:true,
    },
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;
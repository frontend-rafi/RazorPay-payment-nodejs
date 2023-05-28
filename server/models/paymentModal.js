const mongoose =require("mongoose");

const paymentSchema= new mongoose.Schema({
    razorpay_order_id:{
        type:String,
        required:true
    },
    razorpay_payment_id:{
        type:String,
        required:true
    },
    razorpay_signature_id:{
        type:String,
        required:true
    },
});
exports.payment= mongoose.model("payment",paymentSchema);
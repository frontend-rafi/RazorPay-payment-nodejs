//* about razorpay
const Razorpay = require('razorpay');
const  crypto = require('crypto');
const { payment } = require('../models/paymentModal');



const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret:process.env.RAZORPAY_SECRET_API_KEY
});
//* about razorpay

//**order
exports.checkout =async (req,res)=>{
    const options = {
        amount: Number(req.body.amount * 100),  
        currency: "BDT",
        
      };
      
      const order = await instance.orders.create(options);
     

       
        res.status(200).json({
            success:true,
            order
        })
        
}

//* paymentVerification
exports.paymentVerification =async (req,res)=>{
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    //* for verification razorpay order Id + paymentId should be equal to razorpay signature

const expectedSignature = crypto.createHmac("sha256",process.env.RAZORPAY_SECRET_API_KEY)
.update(body.toString())
.digest("hex");

// console.log("sig received" , razorpay_signature);
// console.log("sig generated", expectedSignature);

const isAuthenticated = expectedSignature === razorpay_signature;

if (isAuthenticated) {
  //database comes here
await payment.create({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature
})


  res.redirect(
    `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
  );
}else{
  res.status(400).json({
    success:false,
    
})
}
      
}
//* getkey
exports.getKey=async(req,res)=>{
    res.status(200).json({key:process.env.RAZORPAY_API_KEY})
 }

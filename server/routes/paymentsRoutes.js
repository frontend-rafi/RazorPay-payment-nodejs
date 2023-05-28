const express = require("express");

const router = express.Router();
const { checkout, paymentVerification, getKey } = require("../controllers/paymentController");





router.post("/checkout",checkout);

router.post("/paymentverification",paymentVerification);

//*get key from config file
router.get("/getkey",getKey);



module.exports=router
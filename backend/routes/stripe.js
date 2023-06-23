const router = require("express").Router();



const stripe = require("stripe")("sk_test_51KmfR0SGTxh983z974FFPZLPoWiWDP11mES3UjyCTLfLkA4gpUn1vBp35YI466IoO5b0U2BmE270JjzRSb3Fh2nS00BWA0ZOln");

router.post("/payment", (req, res) => {
   stripe.paymentIntents.create({
    amount: 1099,
    currency: 'inr',
    payment_method_types: ['card'],
  
},
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;

const router =require("express").Router();
const User = require("../models/User");
const CryptoJS= require("crypto-js");
const jwt = require("jsonwebtoken");



//register----=---

router.post("/register", async (req,res)=>{ 


  const newUser= new User({
  username: req.body.username,
  email: req.body.email,
  password: CryptoJS.AES.encrypt(req.body.password, process.env.Pass_sec).toString(),

});


try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); 
}catch(err) {
  res.status(500).json(err);
}

});

//login------
router.post("/login", async (req,res)=>{ 

try{
const user = await User.findOne({username:req.body.username});
!user&& res.status(401).json("wrong cardientials");
 const hashpassword = CryptoJS.AES.decrypt(user.password, process.env.Pass_sec);
  const originalPassword = hashpassword.toString(CryptoJS.enc.Utf8);

 originalPassword!==req.body.password&& res.status(401).json("wrong cardientials");

  const Token = jwt.sign(
    {
      id: user._id,
      isAdmin:user.isAdmin,

    },
    process.env.sec_Jwt,
 
  )

  const {password, ...others }=user._doc;


res.status(200).json({ others , Token});
} catch(err){
res.status(500).json( err);

}
  


});



module.exports =router;
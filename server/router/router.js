const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../schema/user")

router.get("/route",(req,res)=>{
    res.send("Router request")
})

router.post("/signup",async (req,res)=>{
    const {name,email,password,confirmpassword} = req.body;
    try {
        const oldUser = await User.findOne({name,email});
        if(oldUser){
            res.sendStatus(400);
        }
        else{
            const newpassword = await bcrypt.hash(password,12)
            const newconfirmpassword = await bcrypt.hash(confirmpassword,12)
            const newUser = await User.create({name,email,password:newpassword,confirmpassword:newconfirmpassword});
            if(newUser){
                res.json(newUser);
            }
        }
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
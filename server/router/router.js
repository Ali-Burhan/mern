const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../schema/user")
const jwt = require("jsonwebtoken");
router.get("/route",(req,res)=>{
    res.send("Router request")
})

router.post("/signup",async (req,res)=>{
    const {name,email,password,confirmpassword} = req.body;
    try {
        if(!name || !email||!password||!confirmpassword){
            res.sendStatus(403);
        }

        if(password!==confirmpassword){
            res.sendStatus(400);
        }
        if(password.length<=7 || confirmpassword.length<=7){
            res.send(400);
        }
        const oldUser = await User.findOne({name,email});
        if(oldUser){
            res.sendStatus(400);
        }
        else{
            const newpassword = await bcrypt.hash(password,12)
            const newconfirmpassword = await bcrypt.hash(confirmpassword,12)
            const newUser = await User.create({name,email,password:newpassword,confirmpassword:newconfirmpassword});
            if(newUser){
                const token =  jwt.sign({newUser},"secretkey",{expiresIn:"2h"})
                newUser.token = token;
                console.log(token);
                res.json({newUser,token});
            }
        }
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
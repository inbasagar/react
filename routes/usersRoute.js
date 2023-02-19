const express =require("express");
const { default: mongoose } = require("mongoose");
const router=express.Router();
//const User=require("../models/userModel")
require("../models/userModel")
const User=mongoose.model("UserInfo");

router.post("/login",async(req,res)=>
{
    const{username,password}=req.body

    try{
        const user = await User.findOne({username,password})
        if(user)
        {
            res.send(user)
        }
        else
        {
            return res.status(400).json(error)
        }
    }
    catch(error)
    {
        return res.status(400).json(error)
    }
});


router.post("/register",async(req,res)=>
{
    
    const{username,password}=req.body;

    try{
        //const newuser = new User(req.body)
        await User.create({
            username,
            password,
        });
        res.send('User registered successfully');
    }
    catch(error)
    {
        return res.send("resgiter failed at user route");
    }
});


module.exports=router
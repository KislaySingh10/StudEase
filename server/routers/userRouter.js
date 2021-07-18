import express from "express"
import data from "../data.js";
import {User,Checkup,Arrival,Order,Hostel,Leave} from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler"
import { generateToken, isAuth } from "../utils.js";
import bcrypt from "bcryptjs";

const userRouter=express.Router();

userRouter.post('/register', expressAsyncHandler(async(req, res) => {
    var newUser = new User({email: req.body.email, name: req.body.name, role: req.body.role,password:bcrypt.hashSync(req.body.password,8),college:req.body.college});

    // newUser.college.id = req.body.college;

    // College.findById(req.body.college, (err, college) => {
    //     newUser.college.name = college.name;
    // })
    createdUser=await newUser.save();
    res.send({
        _id:createdUser._id,
        name:createdUser.name,
        email:createdUser.email,
        role:createdUser.role,
        token:generateToken(createdUser)
    })
}))


userRouter.post("/signin",expressAsyncHandler(async(req,res) => {
        const user= await User.findOne({email:req.body.email});
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                res.send({
                    _id:user._id,
                    name:user.name,
                    email:user.email,
                    isAdmin:user.isAdmin,
                    token:generateToken(user)
                });
                return;
            }
        }
        res.status(401).send({message:"Invalid email or password"});
    }))


export default userRouter;
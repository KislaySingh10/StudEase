import express from "express"
import {Checkup,Arrival,Order,Leave} from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler"
import { isAuth } from "../utils.js";
const requestRouter=express.Router();

requestRouter.post('/checkup', isAuth, expressAsyncHandler(async(req, res)=> {

    var newCheckup = new Checkup({
        age: req.body.age,
        symptoms: req.body.symptoms
    });

    newCheckup.user.id = req.user._id;
    newCheckup.user.name = req.user.name;

    newCheckup.college.id = req.user.college.id;
    newCheckup.college.name = req.user.college.name;

    await newCheckup.save()

}));
requestRouter.post('/arrival', isAuth, expressAsyncHandler(async(req, res)=> {

    var newArrival = new Arrival({
        branch: req.body.branch,
        address: req.body.address,
        between: req.body.between,
        to: req.body.to,
        hostel: req.body.hostel,
        mobileno: req.body.mobileno,
        covid: req.body.covid,
        
    });

    newArrival.user.id = req.user._id;
    newArrival.user.name = req.user.name;

    newArrival.college.id = req.user.college.id;
    newArrival.college.name = req.user.college.name;

    await newArrival.save()
}));

requestRouter.post('/leave', isAuth, expressAsyncHandler(async(req, res)=> {

    var newLeave = new Leave({
        branch: req.body.branch,
        address: req.body.address,
        days: req.body.days,
        from: req.body.from,
        to: req.body.to,
        hostel: req.body.hostel,
        mobileno: req.body.mobileno,
        covid: req.body.covid,
        
    });

    newLeave.user.id = req.user._id;
    newLeave.user.name = req.user.name;

    newLeave.college.id = req.user.college.id;
    newLeave.college.name = req.user.college.name;

    await newLeave.save()


}));

requestRouter.post('/order', isAuth, expressAsyncHandler(async(req, res)=> {

    var newOrder = new Order({
        hostel: req.body.hostel,
        mobileno: req.body.mobileno,
        from: req.body.from,
        item: req.body.item
        
    });

    newOrder.user.id = req.user._id;
    newOrder.user.name = req.user.name;

    newOrder.college.id = req.user.college.id;
    newOrder.college.name = req.user.college.name;

    await newOrder.save();

}));
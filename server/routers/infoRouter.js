import express from "express"
import {Checkup,Arrival,Order,Leave} from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler"
import { isAuth } from "../utils.js";
const infoRouter=express.Router();

infoRouter.get('/:id', isAuth , expressAsyncHandler(async(req, res) => {

    const cup= Checkup.find({user:req.params.id})
    
    const arr= Arrival.find({user:req.params.id})
                
    const leave= Leave.find({user:req.params.id})
                    
    const order= Order.find({user:req.params.id})
                        
    const hostel= Hostel.find({user:req.params.id})
                        
    const user= User.find({user:req.params.id})
    
    res.send({checkups: cup, arrivals: arr, leaves: leave, orders: order, hostel: hostel, user: user});
    
    
    }))

infoRouter.put('/checkup/:id/approve', (req,res) => {

    Checkup.findByIdAndUpdate( req.params.id , {status: 'approved'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

})

infoRouter.put('/checkup/:id/reject', (req,res) => {

    Checkup.findByIdAndUpdate( req.params.id , {status: 'rejected'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

})

// Arrival



infoRouter.put('/arrival/:id/approve', (req,res) => {

    Arrival.findByIdAndUpdate( req.params.id , {status: 'approved'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

    res.redirect('back');

})

infoRouter.put('/arrival/:id/reject', (req,res) => {

    Arrival.findByIdAndUpdate( req.params.id , {status: 'rejected'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

    res.redirect('back');

})

//

// Leave


infoRouter.put('/leave/:id/approve', (req,res) => {

    Leave.findByIdAndUpdate( req.params.id , {status: 'approved'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

    res.redirect('back');

})

infoRouter.put('/leave/:id/reject', (req,res) => {

    Leave.findByIdAndUpdate( req.params.id , {status: 'rejected'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

    res.redirect('back');

})

//

// Leave



infoRouter.put('/order/:id/approve', (req,res) => {

    Order.findByIdAndUpdate( req.params.id , {status: 'approved'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

    res.redirect('back');

})

infoRouter.put('/order/:id/reject', (req,res) => {

    Order.findByIdAndUpdate( req.params.id , {status: 'rejected'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

    res.redirect('back');

})

//

infoRouter.post('/addcollege', (req, res)=> {

    var newCollege = new College({
        name: req.body.name,
    });

    newCollege.save((err, college)=> {
        if(err){
            res.send(err);
        } else{
            res.send(college);
        }
    })

});

infoRouter.post('/addhostel', (req, res)=> {

    var newHostel = new Hostel({
        name: req.body.name,
    });

    newHostel.college.id = req.user.college.id;
    newHostel.college.name = req.user.college.name;

    newHostel.save((err, Hostel)=> {
        if(err){
            res.send(err);
        } else{
            res.redirect('back');
        }
    })

});

infoRouter.put('/hostel/:id/approve', (req,res) => {

    Hostel.findByIdAndUpdate( req.params.id , {status: 'yes'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

    res.redirect('back');

})

infoRouter.put('/hostel/:id/reject', (req,res) => {

    Hostel.findByIdAndUpdate( req.params.id , {status: 'no'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

    res.redirect('back');

})

infoRouter.post('/vaccine', (req,res) => {

    User.findByIdAndUpdate( req.body.vaccine , {vaccine: 'yes'} , {new: true} , (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
    })

    res.redirect('back');

})

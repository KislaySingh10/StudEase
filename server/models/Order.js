import mongoose from 'mongoose';

var orderSchema = new mongoose.Schema({
    
    hostel:String,
    mobileno:Number,
    from: String,
    item: String,
    status: {
        type: String,
        default: 'pending'
    },
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true
    },
    college: {type:mongoose.Schema.Types.ObjectId,ref:"College",required:true
    }
})

const Order = mongoose.model("Order", orderSchema);
export default Order
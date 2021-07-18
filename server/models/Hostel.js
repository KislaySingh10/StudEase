var mongoose = require('mongoose');

var hostelSchema = new mongoose.Schema({
    name:String,
    status:{
        type: String,
        default: 'no'
    },
    college: {type:mongoose.Schema.Types.ObjectId,ref:"College",required:true
    }
}, {
    timestamps: true
})

const Hostel = mongoose.model("Hostel", hostelSchema);
export default Hostel
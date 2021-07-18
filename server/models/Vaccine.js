import mongoose from 'mongoose';

var vaccineSchema = new mongoose.Schema({
    
    user: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true
    },
    college: {type:mongoose.Schema.Types.ObjectId,ref:"College",required:true
    }

})
const Vaccine = mongoose.model("Vaccine", vaccineSchema);
export default Vaccine
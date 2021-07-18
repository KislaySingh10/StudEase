import mongoose from "mongoose"
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    name:String,
    username: String,
    password: String,
    role: String,
    vaccine:{
        type:String,
        default: 'no'
    },
    college: {type:mongoose.Schema.Types.ObjectId,ref:"College",required:true
    }
}, {
    timestamps: true
})

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);
export default User
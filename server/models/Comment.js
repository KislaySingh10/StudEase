import mongoose from 'mongoose'

var commentSchema = new mongoose.Schema({
    text: String,
    issue: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Issue"
        },

        name: String
    },
    author: {
        id: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }, 
        username: String
    }
}, {
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema)
export default Comment
import mongoose from 'mongoose';

var projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        username: String
    }
}, {
    timestamps: true
});

const Project = mongoose.model("Project", projectSchema);
export default Project
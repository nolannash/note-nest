import mongoose from "mongoose";

const {Schema} = mongoose;

const noteSchema = new Schema({
        title:{
            type: String,
            required: true,
        },
        contents:{
            type: String,
            required: true,
        },
        //thread is relational --> add relationship here...
        thread:{
            type: String,
            required: true,
        },
        tags:{
            type: Array,
            default: [],
        },
        user:{
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

export default mongoose.model('Note', noteSchema)
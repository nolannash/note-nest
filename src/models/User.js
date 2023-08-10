import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);

userSchema.post("save", function(error, doc, next) {
    if (error.name === "MongoError" && error.code === 11000) {
        next(new Error("Duplicate email or username"));
    } else {
        next(error);
    }
});
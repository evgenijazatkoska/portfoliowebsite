import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name is required!"],
        trim: true,
        minLenght:[2, "Name must be larger than 2 characters"],
        maxLenght:[50, "Name must be lesser than 50 characters"],
    }, 

    email: {
        type:String,
        required: [true, "Email is required!"],
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Invalid email address"]

    },

    message: {
        type:String,
        required: [true, "A message is required!"],
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact
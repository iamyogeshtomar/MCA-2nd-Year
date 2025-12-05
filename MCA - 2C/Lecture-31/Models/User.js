const mongoose = require(`mongoose`);

const addressSchema = new mongoose.Schema({
    houseNo: {
        type: String,
        required: true,
    },
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipcode: {
        type: Number
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    dob: {
        type: Date,
        default: new Date(),
    },
    address: {
        type: addressSchema,
    },
    password: {
        type: String,
        min: 8,
        required: true,
    }
});

module.exports = new mongoose.model(`User`, userSchema);
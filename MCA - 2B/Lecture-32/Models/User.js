const mongoose = require(`mongoose`);

const addressSchema = new mongoose.Schema({
    houseNo: {
        type: String,
        // required: true,
    },
    street: {
        type: String,
        // required: true,
    },
    landmark: {
        type: String,
    },
    city: {
        type: String,
        // required: true,
    },
    zipCode: {
        type: Number,
        // required: true,
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
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: addressSchema,
        required: false,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    }
});

module.exports = new mongoose.model(`User`, userSchema);
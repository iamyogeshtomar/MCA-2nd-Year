const mongoose = require(`mongoose`);

const addressSchema = new mongoose.Schema({
    houseNo: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
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
    address: addressSchema,
});

module.exports = new mongoose.model(`User`, userSchema);
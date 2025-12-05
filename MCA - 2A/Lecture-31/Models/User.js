const mongoose = require(`mongoose`);

const addressSchema = new mongoose.Schema({
    houseNo: {
        type: String,
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
    zipCode: {
        type: Number,
    }
});



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: addressSchema
});

module.exports = new mongoose.model(`User`, userSchema);
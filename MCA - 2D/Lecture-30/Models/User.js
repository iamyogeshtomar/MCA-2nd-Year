const { Schema, model } = require(`mongoose`);

const addressSchema = new Schema({
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
        type: String,
    }
});


const userSchema = new Schema({
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
    address: addressSchema,
    password: {
        type: String,
        required: true,
    }
});

module.exports = new model(`User`, userSchema);
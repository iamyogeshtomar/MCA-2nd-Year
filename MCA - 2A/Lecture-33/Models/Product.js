const { Schema, model } = require(`mongoose`);

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        default: `No Description available!!!!`
    },
    review: [{
        type: String,
    }]
});

module.exports = new model(`Product`, productSchema);
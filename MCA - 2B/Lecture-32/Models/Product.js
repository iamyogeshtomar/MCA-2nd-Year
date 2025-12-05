const { Schema, model } = require(`mongoose`);

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        default: `No Description available!!!`,
    },
    review: [{
        type: String,
    }],
}, { timestamps: true, });

module.exports = new model(`Product`, productSchema);
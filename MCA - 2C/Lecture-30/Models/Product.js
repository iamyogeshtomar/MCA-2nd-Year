const { Schema, model } = require(`mongoose`);

const productSchema = new Schema({
    name: { type: String, required: true, unique: true, },
    price: { type: Number, required: true, },
    description: { type: String, default: `No description given` },
    review: [{ type: Schema.Types.ObjectId, ref: `Review` }],
});

module.exports = new model(`Product`, productSchema);
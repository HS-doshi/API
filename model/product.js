const mongoose = require("mongoose")

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"]

    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
        required: [true, "rating must be provided"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["Suzuki", "Tata", "Renault", "Jaguar", "Hyundai", "Toyoto", "BMW"],
            message: `{values} is not supported!`,
        },
    },
});

module.exports = mongoose.model('Product', ProductsSchema);
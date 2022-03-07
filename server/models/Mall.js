const mongoose = require("mongoose")

const MallSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: Array,
            required: true
        },
        guests: {
            type: Array,
            required: true
        },
        rooms: {
            type: Array,
        },
        price: {
            type: Number,
            required: true
        },
        inStock: {
            type: Boolean,
            default: true
        },
        email: {
            type: String,
            required: true
        }
    }, { timestamps: true }
)

module.exports = mongoose.model("Mall", MallSchema)
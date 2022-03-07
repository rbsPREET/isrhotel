const mongoose = require("mongoose")
const Mall = require("./Mall")

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        mall: {
            type: Mall,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        address: {
            type: Object,
            required: true
        },
        status: {
            type: String,
            default: "pending"
        }
    }, { timestamps: true }
)

module.exports = mongoose.model("Order", OrderSchema)
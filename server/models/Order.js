const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        ref: 'User'

    },
    orderDetails: {
        rooms: {
            type: Array,
            default: [{
                adults: {
                    type: Number,
                    required: true
                },
                childrens: {
                    type: Number,
                    required: true

                },
                amount: {
                    type: Number,
                    required: true
                },
                room: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true
                }
            }],
            required: true
        },

    },
    totalAmount: {
        type: Number,
        required: true
    },
    subscriptionAddress: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Order", OrderSchema)
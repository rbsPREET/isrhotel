const mongoose = require("mongoose")
const Order = require("./Order")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        pendingOrder: { // If user has an unfinished order
            type: Order,
            required: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true }
)

module.exports = mongoose.model("User", UserSchema)
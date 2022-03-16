const mongoose = require("mongoose")

const TokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        expires: 99999999999999,
        default: Date.now
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("Token", TokenSchema)
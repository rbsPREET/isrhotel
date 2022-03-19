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
    expire_at: {
        type: Date,
        default: Date.now() + 60,
        expires: 60
    }
}, {
    timestamps: true
})

TokenSchema.index({
    "expire_at": 1
}, {
    expireAfterSeconds: 180562
});

module.exports = mongoose.model("Token", TokenSchema)
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
        default: Date.now,
        expires: (Date.now + 1)
    },
}, {
    timestamps: true
})

TokenSchema.index({
    "expire_at": 1
}, {
    expireAfterSeconds: 180562
});

module.exports = mongoose.model("Token", TokenSchema)
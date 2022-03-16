const mongoose = require('mongoose')


const ReviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    },
    mallId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Mall'
    },
    message: {
        type: String,
        required: false,
    },
    rating: {
        type: Number,
        required: true,
    }
})


module.exports = mongoose.model('Review', ReviewSchema);
const mongoose = require("mongoose")

const MallSchema = new mongoose.Schema({
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
    roomIds: {
        type: Array,
        ref: 'Room'
    },
    amenities: {
        type: Object,
        default: {
            "adults": 0,
            "childrens": 0
        },
        required: true
    },
    amenities: {
        type: Object,
        default: {
            "elevator": {
                "text": "Elevator in building",
                "available": 0
            },
            "friendly_workspace": {
                "text": "Friendly workspace",
                "available": 0
            },
            "instant_book": {
                "text": "Instant Book",
                "available": 0
            },
            "wireless_internet": {
                "text": "Wireless Internet",
                "available": 0
            },
            "free_parking": {
                "text": "Free parking on premises",
                "available": 0
            },
            "free_hookers": {
                "text": "Free Hookers",
                "available": 0
            }
        },
    },
    aditionalObjects: {
        type: Array,
        default: [{}]
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Mall", MallSchema)
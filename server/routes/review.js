const router = require("express").Router()
const Review = require("../models/Review");
const {
    verifyTokenAndAuthorization,
} = require("./verifyToken")

// ADD REVIEW
router.post('/:mallId/add', verifyTokenAndAuthorization, async (req, res) => {
    const {
        userId,
        mallId,
        rating
    } = req.body;

    const existReview = await Review.findOne({
        mallId: mallId,
        userId: userId
    })

    existReview && existReview.deleteOne();
    try {
        const newRating = new Review({
            userId,
            mallId,
            rating
        })

        const saved = await newRating.save();

        if (saved) {
            res.status(201).json({
                bool: true,
                status: "Success",
                message: `Hey!, Thank You for your review to ${mallId} hotel, ISRhotels`,
            })
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
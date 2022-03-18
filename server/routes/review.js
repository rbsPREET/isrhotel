const router = require("express").Router()
const Review = require("../models/Review");
const Mall = require("../models/Mall");
const {
    verifyIsLoggedIn,
} = require("./verifyToken")

// ADD REVIEW
router.post('/:id/add', verifyIsLoggedIn, async (req, res) => {
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
        const review = await new Review({
            userId,
            mallId,
            rating
        }).save()

        // const mallObject = mall.toObject()
        await Mall.findByIdAndUpdate({
            _id: mallId
        }, {
            $set: {
                reviews: {
                    count: +1
                }
            }
        })
        //not working yet
        res.status(201).json({
            bool: true,
            status: "Success",
            message: `Hey!, Thank You for your review to ${mallObject.reviews.count} hotel, ISRhotels`,
        })


    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
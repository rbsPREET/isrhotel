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
        await new Review({
            userId,
            mallId,
            rating
        }).save()

        const mall = await Mall.findById(mallId);
        const mallObject = mall.toObject()
        const updatedObj = mallObject.reviews.stars[rating] = mallObject.reviews.stars[rating] + 1;
        await Mall.updateOne({
            $set: {
                reviews: {
                    count: mallObject.reviews.count + 1,
                    stars: {
                        ...mallObject.reviews.stars,
                        ...mallObject.reviews.stars[updatedObj]
                    }
                }
            }
        })

        res.status(201).json({
            bool: true,
            status: "Success",
            data:mallObject,
            message: `Hey!, Thank You for your review to ${mallObject.reviews.count} hotel, ISRhotels`,
        })


    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
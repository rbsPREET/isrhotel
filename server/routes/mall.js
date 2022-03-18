const Mall = require("../models/Mall")
const Review = require("../models/Review")
const {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
} = require("./verifyToken")

const router = require("express").Router()

// CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newMall = new Mall(req.body)
    try {
        const savedMall = await newMall.save()
        res.status(200).json(savedMall)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedMall = await Mall.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })
        res.status(200).json(updatedMall)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Mall.findByIdAndDelete(req.params.id)
        res.status(200).json("Mall " + req.params.id + " has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET MALL => Will use for Searching a Mall / TODO: need to add params on search
router.get("/:id", async (req, res) => {
    try {
        const mall = await Mall.findById(req.params.id)
        res.status(200).json(mall)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET FILTERED MALLS
router.get("/", async (req, res) => {
    // example: if "...mall/=2" => return all malls that has 2 guests option
    const queryGuests = req.query.guests
    const queryRooms = req.query.rooms
    try {
        let malls
        // TODO: switch case
        if (queryGuests)
            malls = await Mall.find().sort({
                createdAt: -1
            }).limit(5)
        else if (queryRooms) {
            malls = await Mall.find({
                rooms: {
                    $in: [queryRooms]
                }
            })
        } else {
            malls = await Mall.find()
        }
        res.status(200).json(malls)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
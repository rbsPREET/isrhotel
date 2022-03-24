const City = require("../models/City");

const router = require("express").Router()


router.get('/',async (req, res) => {
    try {
        const cities = await City.find();
        res.status(200).json(cities)
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router
const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js") // Hash the Password in the DB
const jwt = require("jsonwebtoken")

// Register
router.post("/register", async (req, res) => {

    const newUser = new User({
        fullDetails: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            phone: req.body.phone,
        },
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, 'random').toString()
    })


    try {
        const savedUser = await newUser.save()
        res.status(201).json({
            bool: true,
            status: "Success",
            message: `Hey ${savedUser.fullDetails.firstName}!, Thank You for your registration to ISRhotels`,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });

        !user && res.status(401).json("Wrong credentials")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET)
        const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        userPassword !== req.body.password && res.status(401).json("Wrong credentials")

        const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin,
            },
            'random', {
                expiresIn: "3d"
            }
        )

        res.status(200).json({
            success: true,
            error: null,
            token: accessToken
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err,
            token: null
        })
    }
})

module.exports = router
const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js") // Hash the Password in the DB
const jwt = require("jsonwebtoken")
const Token = require("../models/Token")
const {
    verifyIsLoggedIn
} = require("./verifyToken")

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
        password: CryptoJS.AES.encrypt(req.body.password, 'random').toString(),
        isAdmin: req.body.isAdmin
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

        const hashedPassword = CryptoJS.AES.decrypt(user.password, 'random')
        const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        userPassword !== req.body.password && res.status(401).json("Wrong credentials")

        const accessToken = jwt.sign({
                _id: user._id,
                isAdmin: user.isAdmin,
            },
            'random', {
                expiresIn: "3d"
            }
        )
        const userAlreadyLogged = await Token.findOne({
            userId: user._id
        })
        if (userAlreadyLogged) {
            return res.status(301).json({
                message: 'user already logged in'
            })
        }
        new Token({
            userId: user._id,
            token: accessToken,
        }).save();
        req.user = user;
        req.token = accessToken
        res.status(200).json({
            success: true,
            error: null,
            id: user._id,
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

//logout

router.post("/logout", async (req, res) => {
    try {
        await Token.deleteOne({
            userId: req.body.id
        })
        res.status(200).json({
            success: true,
            error: null,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: "Wrong credentials",
        })
    }
})

router.post('/verify_token', verifyIsLoggedIn, async (req, res) => {
    return res.status(200).json({
        success: req.body.userId ? true : false,
        data: {
            user: req.user,
            token: req.token
        }
    })
});

module.exports = router
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const TokenModel = require('../models/tokenModel')
const crypto = require('crypto')
const emailSender = require('../middleware/emailSender')
const jwt = require('jsonwebtoken')

exports.register = async (req ,res) =>{
    let {firstname, lastname, username, email, password} = req.body

    let user = await UserModel.findOne({username})
    if(user){
        return res.status(400).json({error:" Username already exits. Please create a new username"})
    }

    user = await UserModel.findOne({email})
    if(user){
        return res.status(400).json({error:"Email already exits."})
    }

    const salt = await bcrypt.genSalt(10)
    const HashedPassword = await bcrypt.hash(password, salt)

    user = await UserModel.create({
        firstname,
        lastname,
        username,
        email,
        password: HashedPassword
    })

    if(!user){
        return res.status(400).json({error:"Something went wrong"})
    }

    let token = await TokenModel.create({
        user: user._id,
        token: crypto.randomBytes(24).toString('hex')
    })

    if(!token){
        return res.status(400).json({error:"Something went wrong"})
    }

    const URL = `http://localhost:5000/verify/${token.token}`
    emailSender({
        from:'noreply@something.com',
        to: email,
        subject : "Verfication Email",
        text:`copy paste the link in browser to verify your account.${URL}`,
        html:`<a href='${URL}'><button>Verify Now</button></a>`
    })

    res.send({message:"Thank you for registering",user})
}

exports.verifyEmail = async (req, res) =>{
    let token = await TokenModel.findOne({token: req.params.token})
    if(!token){
        return res.status(400).json({error:"Invalid token or token may have expired"})
    }

    let user = await UserModel.findById(token.user)
    if(!user){
        return res.status(400).json({error:"User associated with token not found."})
    }

    if(user.isVerified){
        return res.status(400).json({error:"User already verified. Login to continue"})
    }

    user.isVerified = true 
    user = await user.save()
    if(!user){
        return res.status(400).json({error:"Something went wrong"})
    }

    res.send({message:"Email verified successfully."})
}

exports.resendVerification = async (req, res) =>{
    let user = await UserModel.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"Email not registered"})
    }

    if(user.isVerified){
        return res.status(400).json({error:"User already verified. Login to continue"})
    }

    let token = await TokenModel.create({
        user: user._id,
        token: crypto.randomBytes(24).toString('hex')
    })

    if(!token){
        return res.status(400).json({error:"Something went wrong"})
    }

    const URL = `http://localhost:5000/verify/${token.token}`
    emailSender({
        from:'noreply@something.com',
        to: req.body.email,
        subject : "Verfication Email",
        text:`copy paste the link in browser to verify your account.${URL}`,
        html:`<a href='${URL}'><button>Verify Now</button></a>`
    })

    res.send({message:"Verification link has been sent to your email",user})
}

exports.forgetPassword = async (req, res) =>{
    let user = await UserModel.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"Email not registered"})
    }

    let token = await TokenModel.create({
        user: user._id,
        token: crypto.randomBytes(24).toString('hex')
    })

    if(!token){
        return res.status(400).json({error:"Something went wrong"})
    }

    const URL = `http://localhost:5000/resetpassword/${token.token}`
    emailSender({
        from:'noreply@something.com',
        to: req.body.email,
        subject : "Password Reset Email",
        text:`copy paste the link in browser to reset your password.${URL}`,
        html:`<a href='${URL}'><button>Reset Password</button></a>`
    })

    res.send({message:"Password reset link has been sent to your email",user})
}

exports.resetPassword = async (req, res) =>{
    let token = await TokenModel.findOne({token: req.params.token})
    if(!token){
        return res.status(400).json({error:"Invalid token or token may have expired"})
    }

    let user = await UserModel.findById(token.user)
    if(!user){
        return res.status(400).json({error:"User associated with token not found."})
    }

    let salt = await bcrypt.genSalt(10)
    let HashedPassword = await bcrypt.hash(req.body.password,salt)

    user.password = HashedPassword
    user = await user.save()
    if(!user){
        return res.status(400).json({error:"Something went wrong"})
    }

    res.send({message:"Password reset successfully."})
}

exports.login = async (req, res) =>{
    let user = await UserModel.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"Email not registered."})
    }

    let passwordMatch = await bcrypt.compare(req.body.password, user.password)
    if(!passwordMatch){
        return res.status(400).json({error:"Email and Password do not match."})
    }  
    
    if(!user.isVerified){
        return res.status(400).json({error:"User is not verified"})
    }

    let token = jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
        username: user.username
    },process.env.JWT_SECRET)

    if(!token){
        return res.status(400).json({error:"Something went wrong"})
    }

    res.send({data: token})
}

exports.getUserInfo = async (req, res) =>{
    let {token} = req.body 
    let user = jwt.verify(token,process.env.JWT_SECRET)

    if(!user){
        return res.status(400).json({error:"Something went wrong."})
    }

    res.send(user)
}
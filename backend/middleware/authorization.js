const jwt = require("jsonwebtoken")

exports.isLoggedIn = async (req, res, next) =>{
    if(!req.headers['authorization']){
        return res.status(401).json({error:"User not logged in."})
    }
    next()
}

exports.isAdmin = async (req, res, next) =>{
    let token = await req.headers['authorization']
    if(!token){
        return res.status(400).json({error:"User not logged in."})
    }
    const user = jwt.verify(token,process.env.JWT_SECRET)
    if(user.role != 1){
        return res.status(403).json({error:"User not authorized."})
    }
}
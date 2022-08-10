const jwt = require('jsonwebtoken')
const User= require('../models/userModel')
const requireAuth= async (req,res,next)=>{
    const {authorization} = req.headers
    // console.log(req.headers)
    if(!authorization) res.status(401).json({msg:'authorization token required'})
    // console.log({authorization})
    const token=authorization.split(' ')[1]
    // console.log({token})
    try{
        const {_id}=jwt.verify(token,process.env.SECRET)
        req.user=await User.findOne({_id}).select('_id')
        next()
    }catch(e){
        console.log(e)
        res.status(401).json({e:'request is not authorized'})
    }

}
module.exports=requireAuth
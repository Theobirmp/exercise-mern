const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt=require('bcrypt')
const Schema=mongoose.Schema

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.statics.signup = async function(email,password){
    //validation
    if(!email || !password) throw Error('All fields are required')
    if(!validator.isEmail(email)) throw Error('Email is not valid')
    if(!validator.isStrongPassword(password)) throw Error('Password in not strong enough')
    const exists =await this.findOne({email})
    if(exists) throw Error('email already exists')

    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt)

    const newUser=await this.create({email,password:hash})
    return newUser
}

module.exports=mongoose.model('User',userSchema)
const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
const createWorkout = async (req,res)=>{
    const {title,load,reps} = req.body
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}
const getWorkouts=async (req,res)=>{
    try{
        const workouts=await Workout.find({}).sort({createdAt:-1})
        res.status(200).json(workouts)
    }catch(e){
        res.status(400).json({error:e.message})
    }
}
const getWorkout = async (req,res)=>{
    const id=req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:'No such Workout'})
    }
        const workout=await Workout.findById(id)
        if(!workout){
            return res.status(404).json({error:'No such Workout'})
        }
        res.status(200).json(workout)
}
const deleteWorkout=async()=>{
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:'Workout does not exist'})
    }
    const workout=await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({msg:'No such Workout'})
    }
    res.status(200).json(workout)
}

const updateWorkout=async (req,res)=>{
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:'invalid id'})
    }
    const workout=await Workout.findOneAndUpdate({_id:id},{...req.body})
    if(!workout){
        return res.status(404).json({msg:'No such workout'})
    }
    res.status(200).json(workout)
}
const deleteAboveTen = async (req,res)=>{
    const workout=Workout.deleteMany({reps:{$gte: req.body.MoreThan}}).then(()=>{
        res.status(200).json(workout)
    }).catch(e=>{
        res.status(404).json({msg:e.message})
    })
}
module.exports={createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout,deleteAboveTen}
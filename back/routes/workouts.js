const express = require('express')
const Workout = require('../models/workoutModel')
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout, deleteAboveTen} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()
router.use(requireAuth)



router.get('/',getWorkouts)
router.get('/:id',getWorkout)
router.post('/',createWorkout)
router.delete('/:id',deleteWorkout)
router.delete('/',deleteAboveTen)
router.patch('/:id',updateWorkout)
module.exports=router
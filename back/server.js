require('dotenv').config()
const express = require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts')
const usersRoutes=require('./routes/users')

const app = express()
const cors = require('cors')

app.use(cors({
    origin:'http://localhost:3000'
}))
// //attaches request body to request object
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


app.use('/api/workouts',workoutRoutes)
app.use('/api/user',usersRoutes)



mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`connected to db && listening on port ${process.env.PORT}`)
    })
}).catch(error=>{
    console.log(error)
})


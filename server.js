const express=require('express')
const app=express()
const path=require('path')
const { connected } = require('process')
//middle ware
mongoos.connect(process.env.MONGODB_URI)
mongoos.connect.on('connected',()=>{
    console.log('Connected to mongoDB ${mongoose.connection.name}')
})
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.listen(3000,()=>{
    console.log('the app is listining on port 3000')
})


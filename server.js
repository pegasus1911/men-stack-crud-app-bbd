const express=require('express')
const app=express()
const path=require('path')
//middle ware
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.listen(3000,()=>{
    console.log('the app is listining on port 3000')
})


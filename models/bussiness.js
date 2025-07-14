const mongoose=require('mongoose')
const bussinessSchema=new mongoose.Schema(
    {
        name:String,
        category:String,
        description:String,
        location:String,
        phoneNumber:String,
        website:String,
        isVerified: {
            type:Boolean,
            default:false
        }
    }, {timestamps:true}
)

const business=mongoose.model('Business',bussinessSchema)
module.exports=Business
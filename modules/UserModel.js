const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        required : true
    },
    contect : {
        type : String,
        required : true
    },
    address :{
        type : String,
        required : true
    },
    role:{
        type : String,
        required : true
    },
    business_category : {
        type: Array,
        required : true
      },
    business_name : {
        type : String,
        required : true
    },
    business_address : {
        type : String,
        required : true
    },
    send_request :{
        type : String,
        default:null
    },
    received_request:{
        type : String,
        default:null
    }
})
const user = mongoose.model("user", userSchema);
module.exports = user
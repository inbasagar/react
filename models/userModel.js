const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
     username : {type:String , required: true},
     password : {type:String , required: true},
},
{
collection:"UserInfo",
}
);

const userModel = mongoose.model("UserInfo" , userSchema)

module.exports = userModel
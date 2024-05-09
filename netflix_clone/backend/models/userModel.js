import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName:{type:String, require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}
},{timestamp:true});

const User = mongoose.model("User",UserSchema);
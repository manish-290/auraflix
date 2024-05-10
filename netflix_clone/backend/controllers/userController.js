import { User } from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

//its time for login

export const Login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                success:false,
                message:"Please provide email and password"
            });
        }

        const user =await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Invalid email or password",
                success:false
            });
        }

       const isMatch =  await bcryptjs.compare(password, user.password);
       if(!isMatch){
        return res.status(401).json({
            message:"Invalid email or password",
            success:false
        });
       }

       const tokenData={
        id:user._id
       }
       //if matched we generate a token to store in cookies on browser.
       const token = await jwt.sign(tokenData,"mansih280",{expiresIn:"1h"});
       return res.status(200).cookie("token",token,{httpOnly:true}).json({
        message: `Welcome back ${user.fullName}`,
        user,
        success:true
       });

    }catch(error){
        console.log("Failed to login!")
    }
}

//here the logout implement
export const Logout = async(req,res)=>{
    try{
        return res.status(200).cookie("token","",{
            expiresIn: new Date(Date.now()),
            httpOnly:true}).json({
            message:"User logged out successfully",
            success:true
        })
    }catch(error){
        console.log("Logout failed!");
    }
}

 export const Register = async(req,res)=>{
    try{
        const {fullName,email,password} =req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Invalid data!",
                success:false
            })
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(401).json({
                message:"User already exists!",
                success:false
            })
        }

        //hash the password
        const hashedPassword = await bcryptjs.hash(password,10);

        //if no user create user
        await User.create({
            fullName,
            email,
            password:hashedPassword
        });
        return res.status(201).json({
            message:"User account created successfully.",
            success:true
        });

    }catch(error){
        console.log(error);

    }
}
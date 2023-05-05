import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

// get all users
export const getallUser = async (req,res)=> { 
};


//register
export const register =  async(req,res)=>{ 
    const {name,email,password} = req.body;

    let user = await User.findOne({email});
//if user exist we will throw some error or give message

if (user) return res.status(404).json({
    success:false,
    message : "user already exist!"
});

//if user not exist we will simply create a user
const hashedpassword = await bcrypt.hash(password,10)// <--- hashing the pass
 user = await User.create({name,email,password:hashedpassword})// <--creating user
sendCookie(user,res,"Registered Successfully!",201)//<-- creating token
}



//login
export const login = async(req,res,next)=>{
    const {email,password} = req.body;
    
    // --> finding the user
    const user = await User.findOne({email}).select("+password")// we use select because password select is false
    if (!user) return res.status(404).json({
        success:false,
    message : "Invailid Email or Password !"
})

// checking the password is correct or not 
const isMatched = await bcrypt.compare(password,user.password)

// if password not matched 
if (!isMatched) return res.status(404).json({
    success:false,
message : "Invailid Email or Password !"

})
sendCookie(user,res,`Welcome back ${user.name}`,200)

}


// get user profile
export const getMyProfile = (req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user,
    })
}

export const logout = async(req,res)=>{
    res
    .status(200)
    .cookie("token","",{expires:new Date(Date.now())})
    .json({
        success:true,
        user:req.user,
    });
};
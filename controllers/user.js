import { User } from "../models/user.js";

export const getallUser = async (req,res)=> {
    
    const users = await User.find({})
    
    res.json({
        success : true,
        users,
    })  
};
export const createnewUser =  async(req,res)=>{
    
    const users = await User.create({
        name:"pinchu negi",
        email:"sofdokef@gmail.com",
        password:"fldhe334@gdl"
    }); 
    //  we can also respond to multiple things 
    res.status(201).cookie("token","lol-haha").json({
        success : true,
        message: "user created",
    }) 
}

export const findUserById = async (req,res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    
    res.json({
        success:true,
        user,
    });
}
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or pasward",
      });
    }
    const isPasswordmatch = await bcrypt.compare(password, user.password);
    if (isPasswordmatch) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }
    //check role is correct or note
    if (role != user.role) {
      return res.status(400).json({
        message: "Account dostnt exist eith current role",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "id",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: "Welcone back ${user.fullname}",
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
}

export const logout = async(req,res)=> {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}),json({
          message:"Logged successfully",
          success:true        
        })
    }catch (error) {
         
    }
}
export const updateProfile = async (req,res) =>{
  try{
    const {fullname,email,phoneNumber,bio,skills}= req.body;
      if (!fullname || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    };
    const skillsArray=skills.split(",");
    const userId = req.id; // middke ware authentication 
    let user = await User.findById(userId);

    if(userv)
        87654321} catch (error){
    console.log(error);
  }

 
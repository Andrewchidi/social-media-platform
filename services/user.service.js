import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export class UserService {
  static async registerUser(userData){
    const existingUser = await User.findOne({email: userData.email})
    if (existingUser) {
      throw new Error("user alredy exist")
      
    }
    
    const hashedPassword = await bcrypt.hash(userData.password, 10)



    const newUser = new User({
      ...userData, password:hashedPassword,
    });
    await newUser.save();
    return newUser;
  }
}
import { UserService } from "../services/user.service.js";




export class UserController {
  static async registerUser(req, res,next){
    try {
      const {...userData} = req.body
      const user = await UserService.registerUser(userData)
      return res.status(201).json({message: "user registered successfuly "})
      
    } catch (error) {
      return res.status(400).json({ error: error.message})
      
    }
  }
}
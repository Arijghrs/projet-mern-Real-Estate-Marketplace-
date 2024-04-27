import User from '../models/user.js';
import bcryptjs from 'bcryptjs';


export const signup = async (req,res) =>{
    try {
    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username,email,password: hashedPassword});
    await newUser.save();
    res.status(201).json("user created")
} catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "An internal server error occurred" });
}};
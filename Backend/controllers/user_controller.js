import User from "../models/user_model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist..." });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully", user:{
      id: createdUser.id,
      fullname: createdUser.fullname,
      email: createdUser.email,

    } });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!existingUser || !isMatch) {
      return  res.status(400).json({ message: "Invalid email or password" });
    } else {
      return res
        .status(201)
        .json({
          message: "LoggedIn Successfully!",
          user: {
            id: existingUser.id,
            fullname: existingUser.fullname,
            email: existingUser.email,
          },
        });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    return res.status(402).json({ message: "Login server error..." });
  }
};

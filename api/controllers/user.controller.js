import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";


const registerUser = async (req, res) => {
  try {
    // get all data from body
    const { username, password } = req.body;

    // all the data should exists
    if (!(username && password)) {
      // if one of them is missing
      return res.status(400).send("All fields are required.");
    }

    // check if user already exists - username
    const userAlreadyExist = await User.findOne({ username });
    if (userAlreadyExist) {
      return res.status(401).send("User already exists.");
    }

    // encrypt the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // save the use in DB
    const user = await User.create({
      username,
      password: encryptedPassword,
    });

    // generate a token for user and send it
    const token = jwt.sign(
      {
        id: user._id,
        username,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    user.password = undefined;

    return res.status(201).json(user);

  } catch (error) {
    console.log(error);
  }
};


const loginUser = async (req, res) => {
  try {
    // get all data from frontend
    const { username, password } = req.body;

    // validation
    if (!(username && password)) {
      return res.status(400).send("All fields are required.");
    }

    // find use in DB
    const user = await User.findOne({ username });

    // validation
    if (!user) {
      return res.status(400).send("User doesn't exist.");
    }

    // match the password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (user && isPasswordCorrect) {
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "2h",
      });

      user.token = token;
      user.password = undefined;

      // cookie section
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // in 3days from now
        httpOnly: true,
      };
      return res.status(200).cookie("token", token, options).json({
        success: true,
        user,
      });

    } else {
      return res.status(400).json("Wrong password.");
    }

  } catch (error) {
    console.log(error);
  }
};


export { registerUser, loginUser };

import User from "../models/User.js";






export const updateuser= async (req,res,next)=>{

    try {
        const updateduser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        return res.status(200).json(updateduser);
      } catch (err) {
        next(err);
      }
};

export const deleteuser = async(req, res , next)=>{

try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("User has been deleted from list");
  } catch (err) {
    next(err)
  }
};

export const getuser = async(req, res,next)=>{

    try {
        const users = await User.findById(req.params.id);
        return res.status(200).json(users);
      } catch (err) {
        next(err)
      }
};

export const getusers= async(req, res,next)=>{
    try {
        const users = await User.find();
        return res.status(200).json(users);
      } catch (err) {
        next(err)
      }

};


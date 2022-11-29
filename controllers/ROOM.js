import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utilis/error.js"

export const createRoom = async (req,res,next )=>{
    const hotelId = req.params.hotelid;
    const newRoom= new Room(req.body)

    try{
        const savedRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelId , {$push:{rooms:savedRoom._id}})

        }catch(err){
        next(err)
    }
    res.status(200).json(savedRoom)
    }
    catch(err){
        next(err)
    }
}

export const updateRoom= async (req,res,next)=>{

    try {
        const updatedroom = await Room.findByIdAndUpdate(
          req.params._id,
          { $set: req.body },
          { new: true }
        );
        return res.status(200).json(updatedroom);
      } catch (err) {
        next(err);
      }
};


export const deleteRoom = async(req, res , next)=>{
  const hotelId = req.params.hotelid;
try {
    await Room.findByIdAndDelete(req.params._id);
    try{
      await Hotel.findByIdAndUpdate(hotelId , {$pull:{rooms:req.params._id}})

  }catch(err){
  next(err)
}
    return res.status(200).json("Room has been deleted from list");
  } catch (err) {
    next(err)
  }
};

export const getRoom = async(req, res,next)=>{

    try {
        const room = await Room.findById(req.params._id);
        return res.status(200).json(room);
      } catch (err) {
        next(err)
      }
};

export const getRooms= async(req, res,next)=>{
    try {
        const rooms = await Room.find();
        return res.status(200).json(rooms);
      } catch (err) {
        next(err)
      }

};
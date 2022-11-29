import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/Hotel.js";
import { Verifyadmin, VerifyUser } from "../utilis/Verifytoken.js";
//import Hotel from "../models/Hotel.js";
//import {createError} from "../utilis/error.js"
const router = express.Router();

//create
router.post("/",Verifyadmin, createHotel );
//update
router.put("/:id",VerifyUser, updateHotel  );
//delete
router.delete("/:id",VerifyUser, deleteHotel);

//get
router.get("/:id", getHotel);
//get-all
router.get("/",  getHotels );

export default router;

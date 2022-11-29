import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/ROOM.js";
import { Verifyadmin, VerifyUser } from "../utilis/Verifytoken.js";

const router= express.Router();

router.post("/:hotelid",Verifyadmin, createRoom );
//update
router.put("/:id",Verifyadmin, updateRoom  );
//delete
router.delete("/:id/:hotelid",Verifyadmin, deleteRoom);

//get
router.get("/:id", getRoom);
//get-all
router.get("/",  getRooms);




export default router;

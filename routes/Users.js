import express from "express";
import { updateuser,deleteuser, getuser, getusers } from "../controllers/User.js";
import { Verifyadmin, Verifytoken, VerifyUser } from "../utilis/Verifytoken.js";


const router= express.Router();


// router.get("/checkauthentication",Verifytoken,(req,res,next)=>{
//     res.send("hello user, you are authenticated")
// })

// router.get("/checkuser/:id",VerifyUser,(req,res,next)=>{
//     res.send("hello user, you are authenticated and you can delete your account")
// })

// router.get("/checkadmin/:id",Verifyadmin,(req,res,next)=>{
//     res.send("hello admin, you are logged and you can delete all accounts")
// })


router.put("/:id",VerifyUser ,updateuser );
//delete
router.delete("/:id",VerifyUser ,deleteuser);

//get
router.get("/:id",VerifyUser, getuser);
//get-all
router.get("/", Verifyadmin, getusers );




export default router;

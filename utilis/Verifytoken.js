import jwt from  "jsonwebtoken"
import {createError}  from "../utilis/error.js"

export const Verifytoken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token) {
         return next(createError(401,"you are not authenticated"))}

jwt.verify(token,process.env.JWT, (err,User) =>{
    if (err)
        return next(createError(403,"Token  is not valid:"))
        req.user =User;
        next()
        })}


  export const VerifyUser = (req,res,next)=>{

    Verifytoken(req,res, next, ()=>{
        if(req.user._id == req.params._id || req.user.isAdmin){
           next()
        }else {
            return next(createError(403,"you are not authorised"))
        }
    })



  }



  export const Verifyadmin = (req,res,next)=>{

    Verifytoken(req,res,next, ()=>{
        if( req.user.isAdmin){GV
           next()
        }else {
            return next(createError(403,"you are not authorised"))
        }
    })



  }

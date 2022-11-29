import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Authroute from "./routes/Auth.js"
import Hotelsroute from "./routes/Hotels.js"
import Usersroute from "./routes/Users.js"
import Roomsroute from "./routes/Rooms.js"
import cookieParser from "cookie-parser"


const app = express()
dotenv.config();

// initial connection to mongodb-  no try again and again - if connection ok  and problem occur afterward :it will handle
const connect =  ()=>{
try {
      mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb")
  } 
  catch (error) {
    throw   error;
    //console.error(`Could not get products: ${error}`);
  }
};


// prblem happen after initial connection
mongoose.connection.on("disconnected ",()=>{
    console.log("mongodb is disconnected")
})

//try to connect again after disconnection >> it is another listener
// mongoose.connection.on("connected ",()=>{
//     console.log("mongodb is connected")
// })


// middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/API/Auth",Authroute);
app.use("/API/Hotels",Hotelsroute);
app.use("/API/Rooms",Roomsroute);
app.use("/API/Users",Usersroute);



app.use((err,req,res,next) =>{

  const errorStatus =  err.status|| 500
  const errorMessage =  err.mesasge|| "something went wrong"


   return res.status(errorStatus).json({
    success: false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
   });
}
  )










app.listen(8000, ()=>{
    connect()
    console.log("connected to backend")
})



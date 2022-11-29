import mongoose from 'mongoose';
//const { Schema } = mongoose;

const Roomschema = new mongoose.Schema({
    title:
    {type:String,
    required:true},

    maxpeople:
{type:Number,
required:true,
},


    desc:
{type:String,
required:true,
},

    
   roomNumbers :[{number:Number,unavailableDates:{type:[Date]}  }],
    
    


    
},
{timestamps:true}
);

export default mongoose.model("Room",Roomschema)

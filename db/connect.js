const mongoose=require("mongoose");

const murl="mongodb+srv://Archana:ZVjEXir5hWnUyYEi@cluster0.jqwifq9.mongodb.net/pizza";

db=async()=>{
    try {
       const res =  await mongoose.connect(murl,{ useNewUrlParser: true, useUnifiedTopology: true });
       console.log("connection is established");
    //    console.log(res);
}
        
     catch (error) {

        console.log('Error',error);
        
    }
}
    

module.exports=db;
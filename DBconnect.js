const mongoose=require("mongoose");
const DBconnect=async()=>{
    try{
        let result=await mongoose.connect('mongodb://localhost:27017/myapp');
        console.log ("database is connected")

    } catch (errer){
        console.log(errer);
    }
};




module.exports=DBconnect;
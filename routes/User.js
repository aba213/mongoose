const express=require("express");
const userRouter=express.Router();

userRouter.post("/add",async(req,res)=>{
    try{
        const newUser=new user(req.body);
        let result=await newUser.save();
        res.send({user:result,msg:"user added successfully"});

    }catch(errer){
console.log(errer);
    }
});
userRouter.get("/:id",async(req,res)=>{
    try{
        let result=await User.findById({_id:req.parames.id});
        res.send({user:result,mes:" user"});
    }catch(errer){
        console.log(errer);
    }

    });
    userRouter.delete("/:id",async(req,res)=>{
        try{
            let result=await User.findByIdAndDelete({_id:req.parames.id});
            res.send({mes:" user deleted"});
        }catch(errer){
            console.log(errer);
        }
    });
    userRouter.put("/:id",async(req,res)=>{
        try{
            let result=await User.findByIdAndUpdate({_id:req.parames.id},
                {$set:{...req.body}});
            res.send({mes:" user updeted"});
        }catch(errer){
            console.log(errer);
        };
    });



module.exports= userRouter

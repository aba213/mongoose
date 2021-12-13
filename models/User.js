const mongoose=require("mongoose");

const schema=mongoose.Schema;

const userSchema = new schema({
    name: String ,
    age: number,
    favoriteFoods: array,
    }
  );
  const user= mongoose.model('User', userSchema);

  module.exports=User;
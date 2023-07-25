
import mongoose from "mongoose";


export const Connection = async(username,password) =>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.jeym1sp.mongodb.net/?retryWrites=true&w=majority`;
    try{

      await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true });
      console.log("connected suucessfully");
    }catch(error){
        console.log("connection erro",error.message);
    }
}

export default Connection;
import  mongoose  from "mongoose";


const connectdb=async()=>{
          try{
                   await mongoose.connect('mongodb://localhost:27017/test');
                   console.log("Connected");
                   
          }
          catch(err){
                    console.log(err.message);
                    
          }

}
export default connectdb;




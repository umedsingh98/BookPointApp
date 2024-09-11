import mongoose, { connect } from "mongoose";

const connectToMongo = () => {
 const res = mongoose.connect('mongodb+srv://umedsingh2981998:Pmqo5LnvdDYIvnUC@umedsingh.kol9o.mongodb.net/bookpoint?retryWrites=true&w=majority&appName=umedSingh');
if(res){
  console.log("Connected To Database Successfully...");
}
}
export default connectToMongo;
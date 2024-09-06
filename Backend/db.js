import mongoose, { connect } from "mongoose";

const connectToMongo = () => {
 const res = mongoose.connect('mongodb://localhost:27017/bookpoint');
if(res){
  console.log("Connected To Database Successfully...");
}
}
export default connectToMongo;
import mongoose from "mongoose"

const MONGO_URL = 'mongodb+srv://syedsufyanahmed1:jCk83qN7jEh7BNPQ@cluster-latinsec.futt5wn.mongodb.net/'
export const connectMongoDB= async () => {
    try{
        await mongoose.connect(MONGO_URL)
        console.log("Connect a mongodb")
    } catch(error){
        console.log(error)
    }
}
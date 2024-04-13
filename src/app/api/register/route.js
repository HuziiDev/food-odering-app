import { User } from "../../models/user";
import { mongoose } from "mongoose";

export async function POST(req){
    const body = await req.json();
    try {
        mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log(error)
    }
   
  const createdUser = await User.create(body)
  return Response.json(createdUser)
}
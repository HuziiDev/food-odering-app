import { Schema, model, models } from "mongoose"
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
         unique: true 
    },
    password:{
        type: String,
        required: true,
        validate: pass => {
        if(!pass?.length || pass.length>5){
            new Error("Password must of 5 characters ");
        }

    },
         
    },
    
},{timestamps:true});
    

UserSchema.post('validate', function(user){
    const notHasehdPassword= user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHasehdPassword, salt);
    

})

export const User = models?.User || model('User', UserSchema)

  

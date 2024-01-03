import mongoose from "mongoose";
import  validator from "validator";
import bcryptjs from "bcryptjs"
const {Schema} = mongoose;

const userSchema = new  Schema({
    email: {
        type:String,
        lowercase : true,
        unique: true,
        required :true,
        // Validate: [validator.isEmail, "please enter a valid email"]
        validate: {
            validator: (email) => validator.isEmail(email),
            message: props => `${props.value} is not a valid email address`
        }

    },
    username: {
        type:String,
        lowercase:true,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required:true,
        select : false,
        // Validate: [
        //     {
        //         validator: value =>  validator.isStrongPassword(value),
        //         message:"password must contain alphanumeric and special characters and symbols"
        //     }
        // ]
        validate: {
            validator: value => validator.isStrongPassword(value, {
                minLength: 8, // You can set other options for strong password
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            }),
            message: "Password must contain at least 8 characters, including a number, an uppercase letter, a lowercase letter, and a symbol."
        }
    }
},{
    timestamps:true
});


userSchema.pre("save", async function (next) {
    // if(!this.isModified("password")){
    //     return next();
    // }

    // const salt = await bcryptjs.genSalt(10);


    // this.password = await bcryptjs.hash(this.password, salt);
    // next();

    try {
        if (!this.isModified("password")) {
            return next();
        }
        const salt = await bcryptjs.genSalt(10);
        this.password = await bcryptjs.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})


userSchema.methods.comparePassword = async function (givenPassword) {
    return await bcryptjs.compare(givenPassword,this.password);
}

const User = mongoose.model("User", userSchema);

export default User;

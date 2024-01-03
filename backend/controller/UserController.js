import User from "../model/User.js";


export const registerUser = async (req,res) => {
    try {
     

        const {email, username, password} = req.body;
        const isUserExists = await User.findOne({
            $or : [
                {email: email.toLowerCase()},
                {username: username.toLowerCase()}
            ]
        })

        if(isUserExists) {
            res.status(400).json({message:"email or username aleady exists", isUserExists})
        }

        const userInfo = new User({
            username:username,
            password:password,
            email:email
        })


        await userInfo.save();

        userInfo.password = undefined;

        return res.status(201).send(userInfo);

    } catch (err) {
         console.log(err.message )
         res.send("something went wrong " + err.message)
    }
}


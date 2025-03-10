const {Schema, model} = require("mongoose")

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true
        },
        email:{
            type: String,
            required:[true, "Email is required"],
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
            unique: true,
            lowercase: true
        },
        password: String,
        profilePicture: String,
        followersList: [{
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }],
        followingList: [{
            type: Schema.Types.ObjectId, 
            ref: 'User'
        }]
    },
    {
        timestamps: true
    }
)

const User = model("User", userSchema)

module.exports = User
// Packages
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//  const crypto = require('crypto')

// models
const User = require('../models/User');

// config
// const {sendPasswordResetMail} = require('../helpers/mailer')
const {JWT_SECRET} = require('../config');

module.exports = {
    loginUser: async (req, res) =>{
        const user = await User.findOne({email: req.body.email})
        if(!user || !bcrypt.compareSync(req.body.password, user.password))
            return res.status(400).json({ message: "Invalid Username/password" })
        const payload= {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        }
        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: 86400})
        return res.status(200).json({...payload, token, _id: undefined, isAdmin: undefined})
    },

    register: async (req, res) =>{
        const {email, name, password} = req.body
        try{
            let user = await User.findOne({ email: email})
            if(user){
                return res.status(422).json({ message: 'User already exists'})
            }
            user = new User({
                email,
                name,
                password: bcrypt.hashSync(password, 12),
            })
            await user.save()

            return res.status(200).json({
                message: 'User created Successfully',
                email: user['email'],
            })
        }
        catch(err) {
            console.log(err)
            return res.status(400).json({error: err})
        }
    },

    user: async (req, res) =>{
        return res.status(200).json(req.user)
    },

    // forgotPassword: async (req, res) => {
    //     const {email} = req.body
    //     const user  = await User.findOne({email})
    //     if (!user) return res.status(422).json({message: "User does not exist"})
    //     user.resetToken = {
    //         token: crypto.randomBytes(16).toString('hex'),
    //     }
    //     user.save()
    //     await sendPasswordResetMail(email, user.resetToken)
    //     return res.status(200).json({message: 'Check Mail for password reset link'})
    // },

    // passwordReset: async (req, res) =>{
    //     const {token, password} = req.body;
    //     const user = await User.findOne({'resetToken.token': token, 'resetToken.expiresOn': {$gte: Date.now()} })
    //     if(!user) return res.status(401).json({message: "resetToken is invalid"})
    //     if (bcrypt.compareSync(password, user.password)) return res.status(422).json({message: "Password cannot be the same as previous password"})
    //     user.password = await bcrypt.hash(password, 8)
    //     user.resetToken = undefined
    //     await user.save()
    //     return res.status(200).json({message: "Password Changed Successfully"})
    // },

    // changePassword: async (req, res) => {
    //     const {oldPassword, newPassword} = req.body
    //     if(oldPassword === newPassword)
    //         return res.status(422).json({ message: 'newPassword cannot be the same as oldPassword' });
    //     const user = await User.findOne({_id: req.user.id})
    //     if (bcrypt.compareSync(oldPassword, user.password)){
    //         user.password = bcrypt.hashSync(newPassword, 12)
    //         user.save()
    //         return res.status(200).json({message: "password changed successfully"})
    //     }
    //     else return res.status(403).json({message: 'oldPassword is not valid'})
    // },

    admin: (req, res) => {
        return res.status(200).json({...req.user})
    },
}

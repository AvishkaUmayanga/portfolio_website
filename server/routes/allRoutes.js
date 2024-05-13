import express from 'express'
const router = express.Router()
import { profileModel } from '../models/profileModel.js'
import { cvModel } from '../models/cvModel.js';
import nodemailer from 'nodemailer'
import { skillModel } from '../models/skillsModel.js';
import { experienceModel } from '../models/experienceModel.js';
import { userModel } from '../models/userModel.js';
import bcrypt from "bcrypt"

//upload profile image or profile update image
router.post('/add_profile', async(req, res)=>{
    try{
        const profileImg = req.body.profileImg;
        const existingProfile = await profileModel.findOne({})

        if(!existingProfile){
            const newProfile = new profileModel(req.body)
            await newProfile.save()
            return res.status(201).json({message: 'Saved successfully'})
        }
        else{
            existingProfile.profileImg = profileImg
            await existingProfile.save()
            return res.status(200).json({ message: 'Profile updated successfully' })
        }
    
    }
    catch(err){
        return res.status(500).json({error: 'Server error'})
    }
})

//get profile image
router.get('/get_profile', async(req, res)=>{
    try{
        const profileDetails = await profileModel.findOne({})
        const profileImg = profileDetails.profileImg
        return res.status(200).json({profileImg})
    }
    catch(err){
        return res.status(500).json({error: 'Server error'})
    }
})

//upload CV or profile CV
router.post('/add_cv', async(req,res)=>{
    try{
        const userCv = req.body.userCv
        const exisingCv = await cvModel.findOne({})
        if(!exisingCv){
            const newCv = new cvModel(req.body)
            await newCv.save()
            return res.status(201).json({message: 'Cv uploaded successfully'})
        }
        else{
            exisingCv.userCv = userCv
            await exisingCv.save()
            return res.status(200).json({ message: 'Cv updated successfully' })
        }
    }
    catch(err){
        return res.status(500).json({error: 'Server error'})
    }
})

//get cv
router.get('/download_cv', async(req, res)=>{
    try{
        const cvDetails = await cvModel.findOne({})
        const myCv = cvDetails.userCv
        return res.status(200).json({myCv})
    }
    catch(err){
        return res.status(500).json({error: 'Server error'})
    }  
})

//Add skill
router.post('/add_skill', async(req,res)=>{
    try{
        const newSkill = new skillModel(req.body)
        await newSkill.save()
        return res.status(201).json({message: 'Skill added successfully'})
    }
    catch(err){
        return res.status(500).json({error: 'Server error'})
    }
})

//get all skills
router.get('/skills', async(req,res)=>{
    try{
        const allSkills = await skillModel.find({})
        return res.status(201).json({allSkills})
    }
    catch(err){
        return res.status(500).json({error: 'Server error'})
    }
})

//add experience
router.post('/add_experience', async(req,res)=>{
    try{
        const newExperience = new experienceModel(req.body)
        await newExperience.save()
        return res.status(201).json({message: 'Experience added successfully'})
    }
    catch(err){
        return res.status(500).json({error: 'Server error'})
    }
})

//get experience
router.get('/experience', async(req,res)=>{
    try{
        const allExperience = await experienceModel.find({})
        return res.status(201).json({allExperience})
    }
    catch(err){
        return res.status(500).json({error: 'Server error'})
    }
})

//send email(get message)
router.post('/send_mail', async(req, res)=>{

    const {name, email, message} = req.body
    const editedMessage = `name:${name}, email:${email}, message:${message}`

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ,
      port: process.env.SMTP_PORT,
      secure: false, 
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: process.env.SMTP_MAIL,
        subject: 'PORTFOLIO',
        text:editedMessage
    }

    transporter.sendMail(mailOptions, (error) => {
        if(error){
            return res.status(500).json({error: 'Failed to send email'});
        }else{
            return res.status(200).json({message: 'Thank You for Reaching Out to Me'});
        }
    })
})

//login
router.post('/login', async(req, res) => {
    try{
        const {email, password} = req.body
        const existingUser = await userModel.findOne({email})
        if(!existingUser){
            return res.status(400).json({message:'Wrong Email'})
        }
        const passwordMatch = await bcrypt.compare(password, existingUser.password)
        if(!passwordMatch){
            return res.status(401).json({message:'Invalid password'})
        }
        else{
            const accessToken = process.env.TOKEN_KEY
            return res.status(200).json({token: accessToken, message:'Login successfull'})
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json({ error: 'Server error' })
    }
})


export {router}
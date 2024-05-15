import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import { router } from './routes/allRoutes.js'

const app = express()
app.use(cors({origin: 'https://portfolio-website-rho-dusky.vercel.app'}))
app.use(express.json({ limit: '50mb' }));

const PORT = process.env.PORT
const URL = process.env.MONGODB_URL

mongoose.connect(URL).then(()=>{
    console.log('DB Connected...')
}).catch((err)=> console.log('DB error', err))

app.listen(PORT, ()=>{
    console.log(`App is running port ${PORT}`)
})

app.use(router)

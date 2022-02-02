import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import template from './router/template.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded())
const PORT = process.env.PORT || 2565

app.use(cors())
app.use(helmet())

// mongoose
//   .connect(process.env.CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(app.listen(PORT, console.log(`server run at port ${PORT}`)))

app.listen(PORT, console.log(`server run at port ${PORT}`))

app.use('/template', template)


process.on('uncaughtException', function (err) {
  console.log(err)
})

import mongoose from 'mongoose'

const templateSchema = new mongoose.Schema({
  name: String,
})

export default mongoose.model('template', templateSchema)
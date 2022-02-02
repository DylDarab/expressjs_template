import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const printHello = (req,res) =>{
    res.send('Hello')
}

export default {printHello}
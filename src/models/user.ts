import mongoose from 'mongoose'
import { IUser } from './interfaces'

const schema = new mongoose.Schema({
    username: String,
    password: String,
    createdAt: Date,
    description: String,
    avatar: String,
    chatrooms: [String]
})

const user = mongoose.model<IUser>('user', schema)
export default user
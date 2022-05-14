import mongoose from 'mongoose'
import { IChatroom } from './interfaces'

const schema = new mongoose.Schema({
    roomID: String,
    name: String,
    description: String,
    users: [String],
    messages: [{
        msgID: String,
        msgText: String,
        user: String,
        timestamp: Date
    }],
    creator: String,
    createdAt: Date
})

const chatroom = mongoose.model<IChatroom>('chatroom', schema)
export default chatroom
export interface IMessage {
    msgID: string
    msgText: string
    user: string
    timestamp: Date
}

export interface IUser {
    username: string
    password: string
    createdAt: Date
    description: string
    avatar: string
    chatrooms: string[]
}

export interface IChatroom {
    roomID: string
    mame: string
    description: string
    users: IUser[]
    messages: IMessage[]
    creator: string
    createdAt: Date
}

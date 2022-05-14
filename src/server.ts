import express, { Application, raw, Request, Response } from 'express'
import path from 'path'
import mongoose from 'mongoose'
import mongouri from './_config'
import chatroom from './models/chatroom'
import user from './models/user'

const app: Application = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, '../src/public')))

mongoose.connect(mongouri)

app.get('/', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../src/public/home.html')))
app.get('/login', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../src/public/login.html')))
app.get('/chat/:chatroom', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '../src/public/chatroom.html')))

app.post('/api/login', async (req: Request, res: Response) => {
    const { username, password } = req.body
    const dbUser = await user.findOne({ username, password })
    if(!dbUser) return res.send({ error: 'inv_cred' })
    res.send(dbUser)
})

app.post('/api/register', async (req: Request, res: Response) => {
    const { username, password } = req.body
    const dbUser = await user.findOne({ username })
    if(dbUser) return res.send({ error: 'user_exists' })
    const newUser = await user.create({ username, password, createdAt: new Date() })
    res.send(newUser)
})

app.listen(3000, () => console.log('Application running on http://localhost:3000'))
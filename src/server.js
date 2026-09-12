import "dotenv/config.js"
import express from "express"
import userRoutes from "./routes/userRoutes.js"
import authRouters from "./routes/authRoutes.js"

const app = express()
const port = process.env.SERVER_PORT

app.use(express.json())
app.use('/users', userRoutes)
app.use('/auth', authRouters)

app.listen(port, () =>{
    console.log("servidor rodando na porta " +port)

})
import "dotenv/config.js"
import express from "express"
import userRoutes from "./routes/userRoutes.js"

const app = express()
const port = process.env.SERVER_PORT

app.use(express.json())
app.use('/users', userRoutes)

app.listen(port, () =>{
    console.log("servidor rodando na porta " +port)

})
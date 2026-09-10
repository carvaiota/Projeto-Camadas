import jwt from 'jsonwebtoken'
import 'dotenv/config'

async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(401).json({
            message: "Token não autorizado"
        })
    }

    const token = authHeader.split(' ') [1]
    try {
        const decoded  = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    }

    catch{
        console.error(error)
        return res.status(401).json({
            message: "token invalido"
        })

    }
}

export default authMiddleware
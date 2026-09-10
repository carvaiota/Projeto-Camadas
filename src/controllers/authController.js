import decrypt  from decrypt
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import userService from '../service/userService.js'

const authController = {
    login: async (req, res) => {
        try{
            const {email, password} = req.body

            const userExists = await userService.retrieveUserbyemail(email)
            if(!userExists || userExists.length === 0){
                return res.status(400).json({ message: "usuario nn encontrado"

                })
            }
             const validpassword = await bcrypt.compare(password, userExists.password)

             if(!validpassword){
                return res.status(401).json({
                    message: "senha invalida"
                })
             }

        }

        catch{
            
        }
    }
}
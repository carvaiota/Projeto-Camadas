import bcrypt  from 'bcrypt'
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
             const validpassword = await bcrypt.compare(password, userExists[0].password)

             if(!validpassword){
                return res.status(401).json({
                    message: "senha invalida"
                })
             }

             
            const acessToken = jwt.sign(
                {
                    id: userExists[0].id,
                    email: userExists [0].email,
                    name: userExists[0].name,
                    role:  userExists [0].role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '13m'
                }
            )

            res.status(200).json({
                msg: "Login efetuado!",
                token: acessToken
            });
             

        }

        catch(error){
            console.error(error);
            return res.status(500).json({
                msg: "Ocorreu um erro no Servidor",
                errormenssage: error.menssage
            });
        }
    }
}

export default authController;
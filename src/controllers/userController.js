import User from "../models/User.js";
import userService from "../service/userService.js";

const userController = {
  select: async (req, res) => {
    try {
      const result = await userService.recoveruser();

      return res.status(200).json({
        message: "Usuários recuperados com sucesso",
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao recuperar usuários",
        data: error.message,
      });
    }
  },

  create: async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      const hashedPassword = await userService.hashPassword(password)
 
      const user = new User(name, email,  hashedPassword, role, null);

      const result = await userService.createuser(user);

      return res.status(201).json({
        message: "Usuário criado com sucesso",
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao criar usuário",
        data: error.message,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const result = await userService.deleteuser(id);

      return res.status(200).json({
        message: "Usuário deletado com sucesso",
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao deletar usuário",
        data: error.message,
      });
    }
  },


  update: async (req,res) => {
     try {
      const { id } = req.params;

       const { name, email, password } = req.body;

      const user = new User(name, email, password, id);

      const result = await userService.updateuser(user);


      return res.status(200).json({
        message: "Usuário Atuaçizado com sucesso",
        data: result,
      });
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        message: "Erro ao Atualizar usuário",
        data: error.message,
      });
    }
  }
};

export default userController;
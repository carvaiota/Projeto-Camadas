// import User from "../models/User.js";
// import userService from "../service/userService.js";

// const userController = {
//   select: async (req, res) => {
//     try {
//       const result = await userService.recoveruser();

//       res.status(200).json({
//         message: "usuarios recuperados com sucesso0",
//         data: result,
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "erro, usuario nn encontrado",
//         data: error.message,
//       });
//     }
//   },

//   create: async (req, res) => {
//     try {
//       const { name, email, password } = req.body;

//       const user = new User(name, email, password, null);

//       const result = await userService.createuser(user)

//       return res.status(201).json({
//         message: "usuarios criado com sucesso",
//         data: result,
//       })
//     } catch (error) {
//       return res.status(500).json({
//         message: "erro a criar o  usuario",
//         data: error.message,
//       })
//     }
//   },

//  delete: async (req, res) => {
//     try{
    
//     const result = await userService.retrieveuserbyid()
//     return res.status(201).json({
//         message: "usuarios deletado com sucesso",
//         data: result,
//       })
//     }

//     catch (error) {
//         return res.status(500).json({
//         message: "erro a deletar o  usuario",
//         data: error.message,
//       })
//     }

//  }

 
    


//     const { name, email, password } = req.body;

//     const user = new User(name, email, password, null);
//   }
// }

// export default userController;




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
      const { name, email, password } = req.body;

      const user = new User(name, email, password, null);

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
};

export default userController;
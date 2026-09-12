import UserRepository from "../repositories/UserRepository.js";
import bcrypt  from 'bcrypt';

const userService = {
  recoveruser: async () => {
    const result = await UserRepository.select();
    return result;
  },

  retrieveuserbyid: async (userid) => {
    const result = await UserRepository.selectid(userid);
    return result;
  },

  deleteuser: async (userid) => {
    const result = await UserRepository.delete(userid);
    return result;
  },

  createuser: async (user) => {
    const result = await UserRepository.create(
      user.name,
      user.email,
      user.password,
      user.role
    );
    return result;
  },

  
  updateuser: async (user) => {
    const result = await UserRepository.update(
      user.name,
      user.email,
      user.password,
      user.id
    );
    return result;
},

hashPassword: async(password) =>{
  const hashedPassword = await bcrypt.hash(password, 10)
  return hashedPassword
},

 retrieveUserbyemail: async (email) => {
    const result = await UserRepository.selectbyemail(email);
    return result;
  },

}

export default userService;

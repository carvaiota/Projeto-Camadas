import UserRepository from "../repositories/UserRepository.js";

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
    );
    return result;
  },

  
  updateuser: async (user) => {
    const result = await UserRepository.updateuser(
      user.name,
      user.email,
      user.password,
      user.id
    );
    return result;
}

}

export default userService;

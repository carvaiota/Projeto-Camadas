import UserRepository from "../repositories/UserRepository.js";

const UserRepository = {
  recoveruser: async () => {
    const result = await UserRepository.select();
    return result;
  },

  retrieveuserbyid: async (userid) => {
    const result = await UserRepository.retrieveuserbyid(userid);
    return result;
  },

  deleteuser: async (userid) => {
    const result = await UserRepository.deleteuser(userid);
    return result;
  },

  createuser: async (user) => {
    const result = await UserRepository.createuser(
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

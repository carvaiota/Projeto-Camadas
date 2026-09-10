import pool from "../configs/Database.js"


const UserRepository = {
    select: async () =>{
        const sql = 'SELECT * FROM users;'
        const [rows] = await pool.execute(sql)
        return rows
    },

    selectid: async (usersid) => {
        const sql = 'SELECT * FROM users WHERE id = ?'
         const [rows] = await pool.execute(sql,[usersid])
        return rows
    },

     selectbyemail: async (email) => {
        const sql = 'SELECT * FROM users WHERE email = ?'
         const [rows] = await pool.execute(sql,[email])
        return rows
    },

    delete: async (usersid) => {
        const sql = 'DELETE  FROM users WHERE id = ?'
         const [rows] = await pool.execute(sql,[usersid])
        return rows
    },


    
    create: async (name,email,password) => {
        const sql = 'INSERT INTO users VALUES (null,?,?,?)'
         const [rows] = await pool.execute(sql,[name,email,password])
        return rows
    },

    update: async (name,email,password,userid) => {
        const sql = 'UPDATE users SET name = ?,email = ?, password = ? WHERE id = ?'
         const [rows] = await pool.execute(sql,[name,email,password,userid])
        return rows
    }






}

export default UserRepository
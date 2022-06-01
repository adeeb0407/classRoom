import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

export default mysql.createConnection({
    user: process.env.user,
    host : process.env.host,
    password : process.env.password,
    database : process.env.database,
    port : 3306
})
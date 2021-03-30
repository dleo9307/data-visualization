require('dotenv').config()

const mysql = require('mysql2/promise');

exports.getConnection = () => {
    return mysql.createConnection(
        {
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
        }
    )
}



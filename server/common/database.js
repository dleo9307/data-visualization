require('dotenv').config()

const mysql = require('mysql2/promise');
const connectionConfig = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
}

exports.getData = async (querySql) => {
    const connection = await mysql.createConnection(connectionConfig);
    return connection.query(querySql).then((result) => result[0]);
}

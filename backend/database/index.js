const mysql = require("mysql2")

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0   
});

// DEBUG
(async () => {
    try {
        const conn = await pool.promise().getConnection();
        console.log("Database Connection Established");
        conn.release();
    } catch(err) {
        console.error("Database Error", err);
    }
}) ();

module.exports = pool.promise()
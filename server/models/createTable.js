import pool from '../configurations/db-config';

console.log(process.env.NODE_ENV);
console.log(process.env.DEVELOPMENT_URL);

const createTables = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(300) NOT NULL ,
    is_mentor BOOLEAN NOT NULL DEFAULT FALSE,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
    );`;
    
    const tableCreate = async()=>{
        await pool.query(createTables).then(() => {
            console.log("Table created ");
            pool.end();
          }).catch((err) => {
            process.exit(0);
          });
    }
    tableCreate()





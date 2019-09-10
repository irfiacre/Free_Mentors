import pool from '../configurations/db-config';

const createTables = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    email VARCHAR(30) UNIQUE NOT NULL,
    password VARCHAR(300) NOT NULL ,
    address VARCHAR(300) NOT NULL  , 
    bio VARCHAR(300) NOT NULL , 
    occupation VARCHAR(300) NOT NULL , 
    expertise VARCHAR(300) NOT NULL 
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




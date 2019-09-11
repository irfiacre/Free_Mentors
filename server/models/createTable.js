
import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();


const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});


const createTables = `
    DROP TABLE IF EXISTS users CASCADE;
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      firstName VARCHAR(20) NOT NULL,
      lastName VARCHAR(20) NOT NULL,
      email VARCHAR(30) UNIQUE NOT NULL,
      password VARCHAR(300) NOT NULL ,
      address VARCHAR(300) NOT NULL  , 
      bio VARCHAR(300) NOT NULL , 
      occupation VARCHAR(300) NOT NULL , 
      expertise VARCHAR(300) NOT NULL,
      is_mentor BOOLEAN NOT NULL DEFAULT FALSE,
      is_admin BOOLEAN NOT NULL DEFAULT FALSE
    );

   
    
    CREATE TABLE IF NOT EXISTS sessions(
        session_id SERIAL PRIMARY KEY,
        mentorId INT references users(userId) ON DELETE CASCADE,
        menteeId INT references users(userId) ON DELETE CASCADE,
        questions VARCHAR(256) NOT NULL,
        menteeEmail VARCHAR(30) UNIQUE NOT NULL,
        status VARCHAR(10) NOT NULL
    );
  `;


const tableCreate = async () => {
  await pool.query(createTables).then(() => {
    console.log('Tables created ');
    pool.end();
  }).catch((err) => {
    process.exit(0);
  });
};

tableCreate();

import pool from '../configurations/db-config';

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
      mentorId INT ,
      menteeId INT ,
      questions VARCHAR(256) NOT NULL,
      menteeEmail VARCHAR(30) NOT NULL,
      status VARCHAR(10) NOT NULL
    );
    INSERT INTO users(
      firstName,lastName,email,password,address,bio,occupation,expertise,is_mentor,is_admin
      )VALUES('IRANZI','Fiacre','firaduk@gmail.com','$2b$10$c1wOrxcGDy.uYxedZn4qEOnq/O2R9rNQPDJnwkvNiEDWVK76yT4Yy','Rwanda','I love developing','programming and playing','software developer', 'true','true');
    
    `;


const tableCreate = async () => {
  await pool.query(createTables).then(() => {
    console.log('Tables created ');
    pool.end();
  }).catch(() => {
    process.exit(0);
  });
};

tableCreate();

import pool from '../configurations/db-config';


const inserter = `
  INSERT INTO users(
    firstName,lastName,email,password,address,bio,occupation,expertise,is_mentor,is_admin
  )VALUES(
    'IRANZI',
    'Fiacre',
    'firaduk@gmail.com',
    '$2b$10$c1wOrxcGDy.uYxedZn4qEOnq/O2R9rNQPDJnwkvNiEDWVK76yT4Yy',
    'kigali/rwanda',
    'I love developing',
    'programming and playing',
    'software developer',
    'true',
    'true'
  );`;


  const tableCreate2 = async () => {
    await pool.query(inserter).then(() => {
      console.log('Default Values insterted ');
      pool.end();
    }).catch((err) => {
      process.exit(0);
    });
  };
  tableCreate2();
import { Pool } from 'pg';
import dotenv from 'dotenv';



dotenv.config();

let pool;
if (process.env.NODE_ENV === 'development') {

  pool = new Pool({
    connectionString: process.env.DEVELOPMENT_URL,
  });


//   pool.connect((error, client) => {
      
//   });

} else if (process.env.NODE_ENV === 'testing') {
  pool = new Pool({
    connectionString: process.env.TEST_URL,
  });

  pool.on('connect', () => {
  });
  
  

} else if (process.env.NODE_ENV === 'production') {
    console.log("SGHSJHGCVHJKJHC");
  pool = new Pool({
    connectionString: process.env.PRODUCTION_URL,
  });

  pool.on('connect', () => {
  });
}

export default pool;
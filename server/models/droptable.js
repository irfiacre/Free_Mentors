
import pool from "../configurations/db-config"

const dropTables = `DROP TABLE IF EXISTS users CASCADE`;


  const tableDrop = async () => {
    await pool.query(dropTables).then(() => {
      console.log('Drop tables');
      pool.end();
    }).catch((err) => {
      process.exit(0);
    });
  };
  tableDrop();
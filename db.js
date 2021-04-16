const Pool = require("pg").Pool;

const devConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
};

const prodConfig = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig,
);

module.exports = pool;

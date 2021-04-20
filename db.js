const Pool = require("pg").Pool;

const devConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const prodConfig = process.env.DATABASE_URL;

const devPoolParams = {connectionString: devConfig};
const prodPoolParams = {
  connectionString: prodConfig,
  ssl: {rejectUnauthorized: false},
};
// Heroku requires ssl rejectUnauthorized: false, but that breaks the dev server.
const pool = new Pool(
  process.env.NODE_ENV === "production" ? prodPoolParams : devPoolParams,
);

module.exports = pool;

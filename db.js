const Pool = require("pg").Pool;

const devConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const prodConfig = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? prodConfig : devConfig,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;

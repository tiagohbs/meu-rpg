import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'db.gifpopkfwldwhurduoig.supabase.co',
  port: 5432,
  user: 'postgres',
  password: 'vUa7RWKkiXCfFzrB',
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

export default pool;

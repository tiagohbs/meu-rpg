import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use a variável de ambiente
  ssl: { rejectUnauthorized: false }, // Necessário para conexões seguras
});

export default pool; // Certifique-se de que o pool está sendo exportado como padrão
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './db.js';
import dotenv from 'dotenv';
dotenv.config();

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota para testar a conexão com o banco de dados
app.get('/api/test-connection', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ message: 'Conexão bem-sucedida', timestamp: result.rows[0].now });
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    res.status(500).json({ message: 'Erro ao conectar ao banco de dados', error: error.message });
  }
});

// Rota para buscar usuários
app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error.message);
    res.status(500).send('Erro ao buscar usuários');
  }
});

// Rota de login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(401).send('Usuário não encontrado');
    }

    const user = result.rows[0];

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).send('Senha incorreta');
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    res.status(500).send('Erro interno ao fazer login');
  }
});

// Rota de registro
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verifica se o usuário já existe
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).send('Usuário já existe');
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insere o novo usuário
    const result = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, hashedPassword]
    );

    const newUser = result.rows[0];
    res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message);
    res.status(500).send('Erro ao registrar usuário');
  }
});

// Rota para verificar token JWT
app.get('/api/verify-token', (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return res.status(200).json({ valid: true, user: decoded });
  } catch (error) {
    console.error('Erro ao verificar token:', error.message);
    return res.status(401).json({ message: 'Token inválido' });
  }
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno no servidor' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
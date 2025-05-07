import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usuários fictícios para autenticação
const users = [
  { username: 'jogador1', password: 'senha123' },
  { username: 'jogador2', password: 'senha456' },
];

// Rota de login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Verifica se o usuário existe
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.status(200).json({ username: user.username });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
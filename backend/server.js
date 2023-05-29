// Importe as dependências necessárias
const express = require('express');
const mongoose = require('mongoose');
const postsRouter = require('./routes/posts');

// Crie o servidor Express
const app = express();

// Configuração do MongoDB
const dbURI = 'URL_DE_CONEXÃO_DO_MONGODB_ATLAS';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida');
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao MongoDB', error);
  });

// Middleware para analisar o corpo das solicitações como JSON
app.use(express.json());

// Rotas relacionadas às postagens
app.use('/api/posts', postsRouter);

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

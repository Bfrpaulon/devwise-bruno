const Postagem = require('../models/postagem');

// Controlador para a rota de obtenção de todas as postagens
exports.obterTodasPostagens = async (req, res) => {
  try {
    const postagens = await Postagem.find();
    res.json(postagens);
  } catch (error) {
    console.error('Erro ao obter todas as postagens:', error);
    res.status(500).json({ error: 'Erro ao obter todas as postagens' });
  }
};

// Controlador para a rota de criação de uma nova postagem
exports.criarPostagem = async (req, res) => {
  const { título, conteúdo, autor } = req.body;

  const novaPostagem = new Postagem({
    título,
    conteúdo,
    autor
  });

  try {
    const postagemSalva = await novaPostagem.save();
    res.json(postagemSalva);
  } catch (error) {
    console.error('Erro ao criar uma nova postagem:', error);
    res.status(500).json({ error: 'Erro ao criar uma nova postagem' });
  }
};

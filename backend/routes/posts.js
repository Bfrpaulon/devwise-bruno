// Importe as dependências necessárias
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Rota para criar uma nova postagem
router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar a postagem' });
  }
});

// Rota para obter todas as postagens
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter as postagens' });
  }
});

// Rota para obter uma postagem específica por ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Postagem não encontrada' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter a postagem' });
  }
});

// Rota para excluir uma postagem específica por ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Postagem não encontrada' });
    }
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir a postagem' });
  }
});

module.exports = router;

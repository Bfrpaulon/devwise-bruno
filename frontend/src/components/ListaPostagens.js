import React from 'react';
import { Box, Typography } from '@mui/material';
import Postagem from './Postagem';

function ListaPostagens({ postagens }) {
  return (
    <Box>
      <Typography variant="h4" component="div" sx={{ color: 'primary.main' }}>
        Lista de Postagens
      </Typography>
      {postagens.map((postagem) => (
        <Postagem
          key={postagem.id}
          titulo={postagem.titulo}
          conteudo={postagem.conteudo}
          autor={postagem.autor}
        />
      ))}
    </Box>
  );
}

export default ListaPostagens;

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Postagem({ titulo, conteudo, autor }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: 'primary.main' }}>
          {titulo}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {conteudo}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'secondary.main' }}>
          Autor: {autor}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Postagem;

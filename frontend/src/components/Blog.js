import React, { useEffect, useState } from 'react';
import ListaPostagens from './ListaPostagens';

function Blog() {
  const [postagens, setPostagens] = useState([]);

  useEffect(() => {
    fetch('/api/postagens')
      .then((response) => response.json())
      .then((data) => setPostagens(data))
      .catch((error) => console.error('Erro ao obter postagens:', error));
  }, []);

  return (
    <div>
      <h1>DevWise Bruno - My Blog of Technology</h1>
      <ListaPostagens postagens={postagens} />
    </div>
  );
}

export default Blog;

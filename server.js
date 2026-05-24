import express from 'express';
import localRoutes from './src/routes/localRoutes.js';

const app = express();

app.use(express.json());

app.use('/locais', localRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // <- com .js no final

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

import pedidoRoutes from './routes/pedidoRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';

app.use('/api/pedidos', pedidoRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/clientes', clienteRoutes);

export default app;

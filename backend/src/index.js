const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Tipos de parâmetros:
 * Query Params: ?param=X enviados na rota após o "?" para filtros, paginação
 * Route Params: utilizados para identificar recursos
 * Request body: 
 */

app.listen(3333);
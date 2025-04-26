require("dotenv").config();
const express = require("express");
const cors = require("cors");

const livrosRoutes = require("./src/routes/livrosRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // para servir arquivos da pasta public

// Rotas
app.use("/livros", livrosRoutes);

// Porta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`);
});

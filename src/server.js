const express = require("express");
const app = express();

porta = 3333

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.get("/", (req, res) => {
  res.json({msg: "Olá"});
})

app.get("/users", (req, res) => {
  let users = [
    {name: "Joao"}, {name: "Maria"}
  ]
  if(users != undefined)
    res.status(200).json({msg: "Listagem de usuários", users});
  else res.status(404).json({msg: "Sem usuários"});
})

app.post("/users/newUser", (req, res) => {
  const user = req.body.name;
  if(user != undefined)
    res.status(200).json({msg: user + " adicionado"});
  else res.status(400).json({msg: "Preencha os dados corretamente."});
})

app.listen(porta, () => {
  console.log("Servidor iniciado na porta", porta);
})
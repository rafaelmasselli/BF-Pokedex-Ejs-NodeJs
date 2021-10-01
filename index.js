const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // set port usando a var de ambiante ou a 3000
const path = require("path");
const Pokedex = [
  {
    id:"1",
    Numero:252,
    Nome:"Treecko",
    Tipo:"Planta",
    Image:"IMG/planta.png",
    Descricao:"Um pokemon que usa sua calda como metodo de ataque",
    Altura:"0,5 ",
    Peso:"5 ",
    Categoria:"wood gecko",
    Habilidade:"Esse pokemon tem garras que o faclita em escalas de paredes verticais"
},
{
  id:"2",
    Numero:255,
    Nome:"Torchic",
    Tipo:"Fogo",
    Image:"IMG/Fogo.png",
    Descricao:"Esse pokemon respira fogo a mais de 1.800 graus fahreheit incluindo bolas de fogo que deixam o inimigo queimado",
    Altura:"0,4 ",
    Peso:"2.5 ",
    Categoria:"chick",
    Habilidade:"Torchic gruda em seu trainer, seguindo atras com pasos instaveis"
},
{  
    id:"3",
    Numero:"258",
    Nome:"Mudkip",
    Tipo:"Agua",
    Image:"IMG/Agua.png",
    Descricao:"Esse pokemon pode determinar o que esta acontecendo ao seu redor sem usar os olhos",
    Altura:"0.4 ",
    Peso:"7.6 ",
    Categoria:"Torrent",
    Habilidade:"A barbatana na cabeca de mudkip atua como um rada altamente sensivel."
}
]
let = message = ""

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {

  setTimeout(() => {
    message = "";
  }, 5000);

 res.render("index" , {Pokedex, message});
})

app.get("/Cadastro", (req, res) => {
  res.render("Cadastro");
});





app.get("/Detalhes", (req, res) => {
  res.render("Detalhes", {Pokedex});
});

app.post("/info", (req, res) => {
  const {Numero,Nome,Tipo,Image,Descricao,Altura,Peso,Categoria,Habilidade} = req.body;
  const novo = {Numero:Numero, Nome:Nome, Tipo:Tipo, Image:Image, Descricao:Descricao, Altura:Altura, Peso:Peso, Categoria:Categoria, Habilidade:Habilidade}
Pokedex.push(novo)

message = `O pokemon ${Nome} foi adicionado`
  res.redirect("/")
})



app.get('/Detalhes/:id', function(req, res){
  
  let id = req.params.id;
    for(let pokemon of Pokedex) {
    if (pokemon.id === id) {
      id = pokemon;
      break;
    }     
  }
  res.render("Detalhes", { pokemon:id });

});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);  
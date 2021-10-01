const prompt = require('prompt-sync')();

const  pokedex = [
  {
    Numero:252,
    Nome:"Treecko",
    Tipo:"Planta",
    Imagem:"aa",
    Descricao:"Um pokemon que usa sua calda como metodo de ataque",
    Altura:"0,5 M",
    Peso:"5 kg",
    Categoria:"wood gecko",
    HablidadeL:"Esse pokemon tem garras que o faclita em escolaras de paredes verticais"
},
{
    Numero:255,
    Nome:"Torchic",
    Tipo:"Fogo",
    Imagem:"aaa",
    Descricao:"Esse pokemon respira fogo a mais de 1.800 graus fahreheit incluindo bolas de fogo que deixam o inimigo queimado",
    Altura:"0,4 M",
    Peso:"2.5 K",
    Categoria:"chick",
    HablidadeL:"Torchic gruda em seu trainer, seguindo atras com pasos instaveis"
},
{
    Numero:"258",
    Nome:"Mudkip",
    Tipo:"Agua",
    Imagem:"aaa",
    Descricao:"Esse pokemon pode determinar o que esta acontecendo ao seu redor sem usar os olhos",
    Altura:"0.4 M",
    Peso:"7.6 kg",
    Categoria:"Torrent",
    HablidadeL:"A barbatana na cabeca de mudkip atua como um rada altamente sensivel."
}
]


let pokemom1 = pokedex[0].Nome

console.log(pokemom1)

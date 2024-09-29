//Palavras-chave:

//Fantasia
//Aventura
//Drama
//Terror
//Ação
//Romance
//Comédia
//Suspense
//Thriller
//Mistério
//Animação
//Ficção Cientifíca
//Super-Herói
//Esporte
//Família

//Lista de filmes:

//A Aventura de Chihiro | Livre | Aventura,Fantasia
//Guardiões da Galáxia | 12 | Aventura,Fantasia
//As Aventuras de PI | 10 | Drama,Fantasia,Aventura
//Paddington | Livre | Fantasia,Aventura
//Ladrões de Bicicleta | 12 | Drama
//O Menino que Descobriu o Vento | 14 | Drama
//Invocação do Mal | 14 | Terror,Suspense,Thriller
//Sleep - O Mal Nunca Dorme |  | Terror,Mistério,Suspense,Thriller
//Os Simpsons: O Filme | 12 | Animação,Comédia,Aventura
//Vingadores:Ultimato | 12 | Ação,Aventura,Fantasia,Super-Herói,Ficção Cientifíca
//Futurama: O Grande Golpe de Bender | 12 | Animação,Romance,Ficção Cientifíca,Comédia
//Tom e Jerry: O Dragão Perdido | Livre | Animação,Ação,Comédia
//A Era do Gelo 4 | Livre | Animação,Ação,Aventura,Comédia,Família
//Carros | Livre | Animação,Aventura,Comédia,Esporte,Família
//Meu Malvado Favorito | Livre | Animação,Ficção Cientifíca,Comédia,Fantasia,Família
//Space Jam: Um Novo Legado | Livre | Animação,Esporte,Família,Fantasia,Ficção Cientifíca,Comédia

//Adicionar Depois:

//Shrek,Kung Fu Panda,Os Íncriveis

//Site de busca:

//Filmow

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput();
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = gerarRecomendacao(idade);
  text(recomendacao, width/2, height/2);
}
function gerarRecomendacao(idade){
  if(idade >= 10){
    if(idade >= 14){
       return "O menino que descobriu o vento"  
       }
    else{
     return "As aventuras de Pi"
     }
  }
  else{
    return "As aventuras de Chihiro"
  }
}
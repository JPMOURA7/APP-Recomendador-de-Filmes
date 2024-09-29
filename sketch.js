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
//Depois da chuva | 10 | Drama
//Adicionar Depois:

//Shrek,Kung Fu Panda,Os Íncriveis

//Site de busca:

//Filmow

let campoIdade;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("Sua idade:");
  campoIdade = createInput();
  campoFantasia = createCheckbox("Gosta de Fantasia?");
  campoDrama = createCheckbox("Gosta de Drama?");
  campoAcao = createCheckbox("Gosta de Ação?");
  campoFamilia = createCheckbox("Gosta de Família?");
  campoComedia = createCheckbox("Gosta de Comédia?");
  campoTerror = createCheckbox("Gosta de Terror?");
  campoRomance = createCheckbox("Gosta de Romance?");
  campoFiccaoCientifica = createCheckbox("Gosta de Ficção Científica?");
  campoSuperHeroi = createCheckbox("Gosta de Super-Herói?");
  campoEsporte = createCheckbox("Gosta de Esporte?");
  campoThriller = createCheckbox("Gosta de Thriller?");
  campoSuspense = createCheckbox("Gosta de Suspense?");
  campoAnimacao = createCheckbox("Gosta de Animação?");
  campoMisterio = createCheckbox("Gosta de Mistério?");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeRomance = campoRomance.checked();
  let gostaDeFiccaocientifica = campoFiccaoCientifica.checked();
  let gostaDeSuperheroi = campoSuperHeroi.checked();
  let gostaDeEsporte = campoEsporte.checked();
  let gostaDeThriller = campoThriller.checked();
  let gostaDeSuspense = campoSuspense.checked();
  let gostaDeAnimacao = campoAnimacao.checked();
  let gostaDeMisterio = campoMisterio.checked();
  
  let recomendacao = gerarRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  background("white");
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}
function gerarRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if (gostaDeFantasia || gostaDeAventura) {
          return "Homem-Aranha no aranhaverso";
        } else {
          return "Ladrões de Bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de Pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
    if (gostaDeFantasia) {
      return "As aventuras de Chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}

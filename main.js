import {Texto} from "./JS/ClTexto.js" //para importar uma classe
import {historiaSelecionada} from "./JS/FhistoriaSelecionada.js"

const conteudo = document.getElementById('historia-conteudo');
let historias = new Array();
const urlParametros = new URLSearchParams(window.location.search);
let indiceHistoria = urlParametros.get("historia");

//let historias = new Array();

//------------------------textos (objetos da classe Texto)-----------------------
let osIrmaosFelizes = new Texto('../imagem/capaIrmaosFelizes.png', 'Os irmãos felizes', ['Era uma vez uma menina que se chamava Melissa, ela tinha um irmão que se chamava Matheus.', 'Um dia melissa e Matheus queriam mais um irmãozinho, então eles imploraram para a sua mãe. Tempo depois, sua mãe teve outro filho as crianças ficaram felizes mais não sabiam o nome do irmão e ficaram batendo papo enquanto esperavam os pais escolherem o nome.', 'Depois de quatros horas, os pais chegaram em casa e falaram para as curiosas crianças que o nome de seu querido irmãozinho seria Marcos. Todos ficarão muito feliz.', 'Quando o bebê fez 1 ano ele foi brincar com os irmãos e eles se tornaram as crianças mais felizes do mundo.'])

let aVidaDosBrinquedos = new Texto('../imagem/capaVidaDosBrinquedos.png', 'A vida dos brinquedos', ['Era uma vez uma menina que perguntou a sua mãe como era a vida dos brinquedos, sua mãe que não sabia a resposta, ela falou que outro dia ela responderia.', 'Sua mãe foi  trabalhar durante 24horas então.', 'No dia seguinte a mãe chegou e reclamou que a casa bagunçada, e sua mãe respondeu que a vida deles e triste eles  fica um em cima do outro coitados e ainda São esmagados na caixa, a menina riu.']);

historias.push(osIrmaosFelizes); // matriz com todas as historias criadas
historias.push(aVidaDosBrinquedos);
//-------------------------fim textos---------------------------------------------------------
// para criar o arquivo json, no terminal digite: npm init 

conteudo.onload = historiaSelecionada(historias, indiceHistoria);
console.log(indiceHistoria); // a função 'get' pegar o valor de 'historia' que é passado via url.
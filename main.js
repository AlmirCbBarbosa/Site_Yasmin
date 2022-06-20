let opcao = 1 ;

let historias = new Array();// matriz que contem todos os textos
let texto0 = document.getElementById('OsIrmaozinhosFelizes');


class Texto
{
    #imagem; // contém o endereço da imagem que será colocado na página
    #titulo; // armazena o título do texto
    #paragrafos; // matriz que armazena os parágrafos da historia
    static quantidadeTexto = 0; // armazena a quantidade de objetos Texto criados

    constructor (imagem, titulo, paragrafos)
    {
        this.#imagem = imagem;
        this.#titulo = titulo;
        this.#paragrafos = paragrafos;
        Texto.quantidadeTexto += 1;
    }

//método acessor para funçoes ter acessos as variáveis privadas
    get imagem()
    {
        return this.#imagem;
    }

    get titulo()
    {
        return this.#titulo;
    }

    get paragrafos()
    {
        return this.#paragrafos;
    } 
}

//------------------------textos-------------------------------------------------------------

//                          Objetos: Os Irmão felizes

let osIrmaosFelizes = new Texto('../imagem/capaIrmaosFelizes.png', 'Os irmãos felizes', ['Era uma vez uma menina que se chamava Melissa, ela tinha um irmão que se chamava Matheus.', 'Um dia melissa e Matheus queriam mais um irmãozinho, então eles imploraram para a sua mãe. Tempo depois, sua mãe teve outro filho as crianças ficaram felizes mais não sabiam o nome do irmão e ficaram batendo papo enquanto esperavam os pais escolherem o nome.', 'Depois de quatros horas, os pais chegaram em casa e falaram para as curiosas crianças que o nome de seu querido irmãozinho seria Marcos. Todos ficarão muito feliz.', 'Quando o bebê fez 1 ano ele foi brincar com os irmãos e eles se tornaram as crianças mais felizes do mundo.'])

let aVidaDosBrinquedos = new Texto('../imagem/capaVidaDosBrinquedos.png', 'A vida dos brinquedos', ['Era uma vez uma menina que perguntou a sua mãe como e a vida dos brinquedos? A mãe que não sabia a resposta ela falou amanhã te contomais a mãe ia fazer trabalho até 24horas então. No dia seguinte a mãe chegou e falou que casa bagunçada e a filha falou descobri a mãe respondeu como a menina falou a vida deles e   e  triste eles  fica um em cima do outro coitados e ainda São esmagados na caixa, a mãe ri.']);

historias.push(osIrmaosFelizes); // matriz com todas as historias criadas
historias.push(aVidaDosBrinquedos);
//-------------------------fim textos---------------------------------------------------------

//------------------------------função--------------------------------------------------------
function historiaSelecionada(numero)
{
    let paginaImagem = document.getElementById('imagem');
    let paginaTitulo = document.getElementById('titulo');
    let paginaParagrafos = document.getElementById('folha');

    paginaImagem.src= historias[numero].imagem; // informando o endereço da imagem
    paginaTitulo.innerText = historias[numero].titulo;  // escrevendo na tag de título o título da imagem
    
    historias[numero].paragrafos.forEach(paragrafo=> //esta parte cria o paragrafo de acordo com o numero de elementos presente na matriz paragrafos
    {
        let p = document.createElement("p");
        p.innerText = paragrafo;
        p.classList.add("historia__paragrafo"); // adiciona um selector para a formatação do css
        paginaParagrafos.appendChild(p); // vincular a um pai para poder ser renderizado na página
    });
}

//------
function escolha(numero)
{
    opcao = numero;
    console.log(opcao);
}

//--------------------------------------------------------------------------------------------

texto0.onclick = function()
{
    escolha(1);
}





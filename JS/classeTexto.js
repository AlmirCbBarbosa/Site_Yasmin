
let historias = new Array();


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

let osIrmaosFelizes = new Texto('../imagem/capaIrmaoFelizes.png', 'Os irmãos felizes', ['Era uma vez uma menina que se chamava Melissa, ela tinha um irmão que se chamava Matheus.', 'Um dia melissa e Matheus queriam mais um irmãozinho, então eles imploraram para a sua mãe. Tempo depois, sua mãe teve outro filho as crianças ficaram felizes mais não sabiam o nome do irmão e ficaram batendo papo enquanto esperavam os pais escolherem o nome.', 'Depois de quatros horas, os pais chegaram em casa e falaram para as curiosas crianças que o nome de seu querido irmãozinho seria Marcos. Todos ficarão muito feliz.', 'Quando o bebê fez 1 ano ele foi brincar com os irmãos e eles se tornaram as crianças mais felizes do mundo.'])


historias.push(osIrmaosFelizes); // matriz com todas as historias criadas
//-------------------------fim textos---------------------------------------------------------

//------------------------------função--------------------------------------------------------
function historiaSelecionada(numeroHistoria)
{
    
}

//--------------------------------------------------------------------------------------------

//teste pode apagar
let texto = new Array();
let texto001 = new Texto('irmaos.png', 'Os irmãos felizes', ['Era uma vez crianças', 'E foram felizes para sempre']);

let texto002 = new Texto('monstros.png', 'Os monstros', ['Era uma vez monstros', 'E foram infelizes para sempre']);

texto.push(texto001); // acrescentando o texto001
texto.push(texto002); // acrescentando o texto002

console.log(`O tamanho da matriz texto é ${texto.length}`);
console.log(texto[0].titulo); // exibe o titulo do primeiro texto
//console.log(texto[0].paragrafos); // exibe os paragrafos do primeiro texto
texto[0].paragrafos.forEach(elemento => 
{
    console.log(elemento);
});

//fim teste





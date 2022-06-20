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





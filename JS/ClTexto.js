
export class Texto
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
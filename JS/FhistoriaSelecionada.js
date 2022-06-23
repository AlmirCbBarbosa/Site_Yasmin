export function historiaSelecionada(historias, numero)
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
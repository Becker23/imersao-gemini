function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let encontrouResultado = false; // Variável para acompanhar se algum resultado foi encontrado

    // Lista de jogadores com nome, descrição, link para vídeo e link para o LoL Wiki
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase(); // Converte o texto pesquisado para minúsculas

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada jogador na lista de jogadores
    for (let jogador of jogadores) {
        nome = jogador.nome.toLowerCase(); // Converte o nome do jogador para minúsculas
        descricao = jogador.descricao.toLowerCase(); // Converte a descrição do jogador para minúsculas
        tags = jogador.tags.join(" ").toLowerCase(); // Converte as tags do jogador para minúsculas
        // Se o campo de pesquisa não estiver vazio e o nome ou descrição do jogador contiverem o texto pesquisado, exibe o jogador
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ? jogador : null){
            encontrouResultado = true; // Marca que um resultado foi encontrado
            // Constrói o HTML para cada jogador, incluindo nome, link para vídeo, descrição e link para o LoL Wiki
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${jogador.video}" target="_blank">${jogador.nome}</a>
                </h2>
                <p class="descricao-meta">${jogador.descricao}</p>
                <a href="${jogador.lolwiki}" target="_blank">Ver mais</a>
            </div>
        `;
        }
    }

    // Se nenhum resultado foi encontrado, exibe a mensagem
    if (!encontrouResultado || campoPesquisa === "" || campoPesquisa === " ") {
        section.innerHTML = "<p>Nada foi encontrado</p>";
    } else {
        // Se algum resultado foi encontrado, exibe os resultados
        section.innerHTML = resultados;
    }
}

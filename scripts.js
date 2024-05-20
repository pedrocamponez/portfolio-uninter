function mostrarConteudo(section) {
    let content = document.getElementById('conteudo');
    switch (section) {
        case 'sobre':
            content.innerHTML = `
            <h2>Quem sou eu?</h2>
            <p>Eu sou o Pedro Camponez. Sou Engenheiro de Software em formação desde 2023, mas atuo na área desde o fim de 2021.Já trabalhei em vários projetos e hoje presto serviço como desenvolvedor para projetos brasileiros e internacionais.</p>
            `;
            break;
        case 'hobbies':
            content.innerHTML = `
            <h2>Hobbies</h2>
            <p>Meus maiores hobbies são Taekwondo e Tiro Com Arco, além de gostar bastante de assistir filmes e séries, bem como esportes, principalmente futebol americano e futebol. :D</p>
            <p>Além disso, sou fluente em inglês e espanhol, e falo básico de polones, coreano e mandarim! :D</p>
            `;
            break;
        case 'projetos':
            content.innerHTML = `
            <h2>Projetos</h2>
            <ul>Alguns projetos que já fiz:
                <li><a href="https://la-eucaliptos-v1.vercel.app" target="_blank">Projeto 1</a></li>
                <li><a href="https://sweater-weather-app-v101.vercel.app" target="_blank">Projeto 2</a></li>
                <li><a href="https://marvel-project-beta.vercel.app" target="_blank">Projeto 3</a></li>
            </ul>
            `;
            break;
        case 'contato':
            content.innerHTML = `
            <h2>Contato</h2>
            <form id="form-de-contato">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required><br><br>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br><br>
                
                <label for="mensagem">Mensagem:</label><br>
                <textarea id="mensagem" name="mensagem" rows="4" required></textarea><br><br>
                
                <button type="submit">Enviar</button>
            </form>`;
            break;
        default:
            content.innerHTML = '<h2>Bem vindo(a)!</h2><p>Clique nos botões abaixo para ver os conteúdos!</p>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarConteudo();
});

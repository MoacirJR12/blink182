// Selecionar o elemento do menu
const menu = document.querySelector('.cabecalho_menu');

// Selecionar todos os links do menu
const links = document.querySelectorAll('.cabecalho_menu_link');

// Adicionar a classe 'active' ao link atualmente ativo
links.forEach(link => {
    if (link.href === location.href) {
        link.classList.add('active');
    }
});

// formulario de cadastro
function validar(){
    if(document.form1.login.value.length <= 1){
        alert("O campo login foi deixado em branco");
        document.form1.login.focus();
        return false;
    } else {
        if(document.form1.senha.value.length <= 1){
            alert("O campo senha foi deixado em branco!");
            document.form1.senha.focus();
            return false;
        } else {
            alert("Campos preenchidos!");
            return true;
        }
    }
}
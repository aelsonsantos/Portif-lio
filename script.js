const menubarras = document.querySelector('.menu_barras');

menubarras.addEventListener('click', () => {
    changeMenu();
});

function changeMenu() {
    const menu = document.querySelector('.cabecalho_menu_res')
    menubarras.classList.toggle('change');

    if(menubarras.classList.contains('change')){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
}


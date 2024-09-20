const dropdown = document.querySelector('.corpo-dropdown');
const botaoDrop = document.querySelector('#btDropdown');

botaoDrop.addEventListener('click', () => {
    if (botaoDrop.classList.contains('active')) {
        dropdown.style.animation = 'fecharAnimacao 0.5s forwards';
        setTimeout(() => {
            dropdown.style.display = 'none';
            botaoDrop.classList.add('btDropdown');
            botaoDrop.classList.remove('active');
            dropdown.style.animation = '';
        }, 500);


    } else {
        dropdown.style.display = 'block';
        dropdown.style.display = 'animacao 0.5s forwards';
        botaoDrop.classList.add('active')
        botaoDrop.classList.remove('btDropdown')
    }
});

document.addEventListener('click', (event) => {
    if (botaoDrop.classList.contains('active') && !dropdown.contains(event.target) && event.target !== botaoDrop) {
        dropdown.style.animation = 'fecharAnimacao 0.5s forwards';
        setTimeout(() => {
            dropdown.style.display = 'none';
            botaoDrop.classList.add('btDropdown');
            botaoDrop.classList.remove('active');
            dropdown.style.animation = '';
        }, 500)
    }
});









const hamburguer = document.querySelector('.hamburguer');
    const navLinks = document.querySelector('.links_menu');
    hamburguer.addEventListener('click', () =>{
    navLinks.classList.toggle('open'); 
    });
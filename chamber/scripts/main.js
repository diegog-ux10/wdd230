const menu = document.getElementById('main-nav'); 
const btMenu = document.getElementById('menu-toggle');
const hamburgerMenu = document.getElementById('menu-icon') 
const closeMenuIcon = document.getElementById('close-icon') 
document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = new Date();
console.log("gi");

const toggleMenu = () => {
    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    closeMenuIcon.classList.toggle('active');
}

btMenu.addEventListener('click', toggleMenu)

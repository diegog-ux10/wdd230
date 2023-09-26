const menuBtn = document.getElementById("menu-icon");
const menu = document.getElementsByTagName("nav");

console.log(menu);

menuBtn.addEventListener("click", () => {
  menu[0].classList.toggle("open");
  menuBtn.classList.toggle("open");
});

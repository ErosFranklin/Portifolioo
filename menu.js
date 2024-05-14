const burguer = document.querySelector("#burguer");
const menu = document.querySelector(".menu");

function clickMenu(){
    burguer.addEventListener("click" , () => menu.classList.toggle("ativo"));
}

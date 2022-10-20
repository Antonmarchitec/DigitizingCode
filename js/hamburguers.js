
  //ESTE DOCUMENTO FUE CREADO EN EL VIDEO
  
  
  // Look for .hamburger
  //var contEnlaces = document.getElementById("menuenlaces");
  let hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", ()=> {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });



//SCRIPT PERSONALIZADO PARA ABRIR EL BOTON
let cont_headerDesktop_menu = document.querySelector("#cont_headerDesktop_menu")
let btnResponsive = document.querySelector("#btnResponsive")

btnResponsive.addEventListener("click", () =>{
   cont_headerDesktop_menu.classList.toggle("cont_headerDesktop_menu_JS")
})

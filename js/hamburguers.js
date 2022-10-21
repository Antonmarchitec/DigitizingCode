
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
let containerHeader_ul = document.querySelector("#containerHeader_ul")
let containerHeader_btn = document.querySelector("#containerHeader_btn")

containerHeader_btn.addEventListener("click", () =>{
  containerHeader_ul.classList.toggle("containerHeader_ul_JS")
})

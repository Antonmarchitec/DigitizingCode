
//let butonForm = document.querySelector("#butonForm")

function validar(){
      //para correo electronico
    let nameForm = document.querySelector("#nameForm").value
    let apellidoForm = document.querySelector("#apellidoForm").value
    let celuForm = document.querySelector("#celuForm").value
    let mailForm = document.querySelector("#mailForm").value
    
    document.querySelector("#texttarea").focus()

    let expresionRegular = /\w+@\w+\.+[a-z]/

    if( nameForm === "" || mailForm === "" || apellidoForm === "" ||celuForm === ""){
        //alert("rellene los espacios")
        Swal.fire({
            title:"<h2 class = 'title'> ¡Rellenar todos los campos! <h2>",    //tilte si se acepta codigo html
            //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
            icon:"warning",  //error   wargning  info  success
            confirmButtonText:"Aceptar",
            backdrop:true,    //el fondo se matiza oscuro con true y false 
            footer: '<h3 class = "footer"> La información es importante</h3>',  //se puede utilizar html
            //width:"35%",    //ancho de ventana trabajar en %
            //timer: 5000,
            //timerProgressBar: true,
            padding: "10px",   //paddinn ventana
            background:"#0c1b32b2",   //fondo de la ventana
            //color:'white',
            //grow:"column",   //funciona como width o height con valores column, row , fullscreen
            position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
   
   
            
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"Confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#0000",
               cancelButtonAriaLabel:"dfdfa",
   
            //IMAGENES EN LA ALERTA
                //imageUrl:'./img/ada.png',
                //imageWidth:'100px',
                //imageHeight:'100px',
                //imageAlt:'ada',
   
            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
                buttonsStyling: false,     //true para trabajar con stilos de switchAlert
                showCloseButton: true,     //coloca el la x para cerrar
                closeButtonAriaLabel:"Cerrar alerta",
   
            //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
                customClass:{
                    
                    popup: "class_popup",
                    //image:'class_image',
                    confirmButton:"class_buttonConfirm",
                    footer:'class_footer'
   
                    //container:'container',
                    //html:'class_title',
                    //header:'header',
                    //closeButton:'close_buttom',
                    //content:'class_content',
                    //input:'inputClass',
                    //actions:'actions',
                    //icon:"class_icon",
                    //cancelButton:"class_buttonCancel",
                    
                },
        });
        return false
    }else if(!expresionRegular.test(mailForm)){
        Swal.fire({
            title:"<h2 class = 'title'> ¡El correo es inválido! <h2>",    //tilte si se acepta codigo html
            //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
            icon:"error",  //error   wargning  info  success
            confirmButtonText:"Aceptar",
            backdrop:true,    //el fondo se matiza oscuro con true y false 
            footer: '<h3 class = "footer"> Campo correo </h3>',  //se puede utilizar html
            //width:"35%",    //ancho de ventana trabajar en %
            //timer: 5000,
            //timerProgressBar: true,
            padding: "10px",   //paddinn ventana
            background:"#0c1b32b2",   //fondo de la ventana
            //color:'white',
            //grow:"column",   //funciona como width o height con valores column, row , fullscreen
            position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
   
   
            
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"Confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#0000",
               cancelButtonAriaLabel:"dfdfa",
   
            //IMAGENES EN LA ALERTA
                //imageUrl:'./img/ada.png',
                //imageWidth:'100px',
                //imageHeight:'100px',
                //imageAlt:'ada',
   
            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
                buttonsStyling: false,     //true para trabajar con stilos de switchAlert
                showCloseButton: true,     //coloca el la x para cerrar
                closeButtonAriaLabel:"Cerrar alerta",
   
            //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
                customClass:{
                    
                    popup: "class_popup",
                    //image:'class_image',
                    confirmButton:"class_buttonConfirm",
                    footer:'class_footer'
   
                    //container:'container',
                    //html:'class_title',
                    //header:'header',
                    //closeButton:'close_buttom',
                    //content:'class_content',
                    //input:'inputClass',
                    //actions:'actions',
                    //icon:"class_icon",
                    //cancelButton:"class_buttonCancel",
                    
                },
        });
        return false
    }else if (isNaN(celuForm)){
        Swal.fire({
            title:"<h2 class = 'title'> ¡Coloque un numero valido! <h2>",    //tilte si se acepta codigo html
            //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
            icon:"error",  //error   wargning  info  success
            confirmButtonText:"Aceptar",
            backdrop:true,    //el fondo se matiza oscuro con true y false 
            footer: '<h3 class = "footer"> Campo celular / Telefono </h3>',  //se puede utilizar html
            //width:"35%",    //ancho de ventana trabajar en %
            //timer: 5000,
            //timerProgressBar: true,
            padding: "10px",   //paddinn ventana
            background:"#0c1b32b2",   //fondo de la ventana
            //color:'white',
            //grow:"column",   //funciona como width o height con valores column, row , fullscreen
            position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
   
   
            
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"Confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#0000",
               cancelButtonAriaLabel:"dfdfa",
   
            //IMAGENES EN LA ALERTA
                //imageUrl:'./img/ada.png',
                //imageWidth:'100px',
                //imageHeight:'100px',
                //imageAlt:'ada',
   
            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
                buttonsStyling: false,     //true para trabajar con stilos de switchAlert
                showCloseButton: true,     //coloca el la x para cerrar
                closeButtonAriaLabel:"Cerrar alerta",
   
            //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
                customClass:{
                    
                    popup: "class_popup",
                    //image:'class_image',
                    confirmButton:"class_buttonConfirm",
                    footer:'class_footer'
   
                    //container:'container',
                    //html:'class_title',
                    //header:'header',
                    //closeButton:'close_buttom',
                    //content:'class_content',
                    //input:'inputClass',
                    //actions:'actions',
                    //icon:"class_icon",
                    //cancelButton:"class_buttonCancel",
                    
                },
        });
        return false 
    }else{
        Swal.fire({
            title:"<h2 class = 'title'> ¡Mensaje enviado! <h2>",    //tilte si se acepta codigo html
            //html:"RELLENAR TODOS LOS ESPACIOS",  //si se permite html
            icon:"success",  //error   wargning  info  success
            confirmButtonText:"Aceptar",
            backdrop:true,    //el fondo se matiza oscuro con true y false 
            footer: '<h3 class = "footer"> Campo celular / Telefono </h3>',  //se puede utilizar html
            //width:"35%",    //ancho de ventana trabajar en %
            //timer: 5000,
            //timerProgressBar: true,
            padding: "10px",   //paddinn ventana
            background:"#0c1b32b2",   //fondo de la ventana
            //color:'white',
            //grow:"column",   //funciona como width o height con valores column, row , fullscreen
            position:"center",  // center  top  bottom   top-start  top-end  bottom-end    bottom-start
   
   
            
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"Confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#0000",
               cancelButtonAriaLabel:"dfdfa",
   
            //IMAGENES EN LA ALERTA
                //imageUrl:'./img/ada.png',
                //imageWidth:'100px',
                //imageHeight:'100px',
                //imageAlt:'ada',
   
            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
                buttonsStyling: false,     //true para trabajar con stilos de switchAlert
                showCloseButton: true,     //coloca el la x para cerrar
                closeButtonAriaLabel:"Cerrar alerta",
   
            //IMPORTANTE PARA TRABAJAR CON ESTILOS PERSONALIZADOS
                customClass:{
                    
                    popup: "class_popup",
                    //image:'class_image',
                    confirmButton:"class_buttonConfirm",
                    footer:'class_footer'
   
                    //container:'container',
                    //html:'class_title',
                    //header:'header',
                    //closeButton:'close_buttom',
                    //content:'class_content',
                    //input:'inputClass',
                    //actions:'actions',
                    //icon:"class_icon",
                    //cancelButton:"class_buttonCancel",
                    
                },
        });
        return false     
    }
}


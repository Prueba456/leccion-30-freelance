/*
 * Archivo principal de JS
 */
 var menu = document.getElementsByClassName("nav")[0];
 var tituloNav = document.getElementsByClassName("titulo")[0];
 var barra = document.getElementsByTagName("li")[0];
 var barra2 = document.getElementsByTagName("li")[1];
 var barra3 = document.getElementsByTagName("li")[2];
 function scroll (event){
   var scroll=window.pageYOffset || document.body.scrollTop;
   console.log(scroll);
   if(scroll>3){
     menu.style.paddingTop = "12px";
     menu.style.paddingBottom = "12px";
     tituloNav.style.fontSize = "18px";
   }
    if(scroll>530){
      console.log(barra);
     barra.classList.add("pestana");
   }else{
     barra.classList.remove("pestana");
   }

   if(scroll>1384 ){
    barra2.classList.add("pestana");
    barra.classList.remove("pestana");
  }else{
    barra2.classList.remove("pestana");
  }

  if(scroll>1934){
   barra3.classList.add("pestana");
   barra2.classList.remove("pestana");
 }else{
   barra3.classList.remove("pestana");
 }

    if(scroll<3){
     menu.style.paddingTop = "25px";
     menu.style.paddingBottom = "25px";
     tituloNav.style.fontSize = "35px";
   }
 }
 window.addEventListener("scroll",scroll);

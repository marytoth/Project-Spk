//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


var contenido= JSON.parse(localStorage.getItem("lista"));
    var lista="";
    var cantidad=0;
    if (contenido!=null && contenido.length>0){
       cantidad=contenido.length;
       contenido.lista.forEach(element => {
         lista+= "<li>" + product.name + "-- $ " + product.cost + "</li>";         
       });
       } else {
            lista+="<div class='alert alert-warning'> Tu carrito esta vacío </div>";
       }

       document.getElementById('cart').innerHTML=lista;
       document.getElementById('cartCont').innerHTML=cantidad;
       //document.getElementById('aremove').innerHTML=remove; 

 document.addEventListener("DOMContentLoaded", function(e){

})

       getJSONData(CART_INFO_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {
      let cart = resultObj.data.articles;
      
      let textToAppend = ``
      for (let a = 0; a < cart.length; a++) {
        textToAppend += `
        <tr>
        <td><img src=''` + cart[a].src + `">
        </td>
        <td></td>
        </tr>
        `

      }
 
      document.getElementById('cart').innerHTML= textToAppend;



    }})
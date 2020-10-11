//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var cart=[]; //array para guardar la colección de artículos.

function mostrar(cart){
  
    var dataTable="";
    for (i=0; i<cart.length;i++){
      let article = cart[i];
      let subTotal = parseInt(article.unitCost)*parseInt(article.count);

      dataTable+=`<tr><td><img src="${article.src}" width=60></td>`;
      dataTable+=`<td><input type="number" id="cant${i}" value=${article.count} > </td>`;
      dataTable+=`<td>${article.name}</td>`;
      dataTable+=`<td>${article.unitCost} + ${article.currency} </td>`;
      dataTable+=`<td>${subTotal}</td>`;
      dataTable+=`</tr>`;
    }
    document.getElementById('carrito').innerHTML=dataTable;
     document.getElementbyId("subtotal").innerHTML= subTotal;
    }

     

     //document.getElementbyId("subtotal").innerHTML= subTotal;
  
  
     document.addEventListener("DOMContentLoaded", function(e){

       getJSONData(CART_INFO_URL).then(function (resultObj) {

        if (resultObj.status === "ok") {
           var cart = resultObj.data.articles;//guardo la colección de artículos en cart
            //es un array
            //alert (`Obtuve ${cart.length} elementos`);
        }

        
          mostrar(cart);
         })})
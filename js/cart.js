//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

 

var cart=[]; //array para guardar la colección de artículos.

function mostrar(cart){

  
    var dataTable="";
    var woShip=0;
        for (i=0; i<cart.length;i++){
               let article = cart[i];
         
               let subTotal = parseInt(article.unitCost)*parseInt(article.count); 
          
               woShip+= subTotal;
     

                  dataTable+=`<tr><td><img src="${article.src}" width=60></td>`;
                  dataTable+=`<td><input type="number" id="cant${i}" value=${article.count} onChange="modCount(${i})"></td>`;
                  dataTable+=`<td>${article.name}</td>`;
                  dataTable+=`<td>${article.unitCost} + ${article.currency} </td>`;
                  dataTable+=`<td>${subTotal}</td>`;
                  dataTable+=`</tr>`;
                  dataTable+= `<td>${cart.length}</td> `;
        }
        document.getElementById('cart').innerHTML= dataTable;
        document.getElementById('subtotal').innerHTML= woShip;

        if (cart != undefined){ 

        document.getElementById('cartCont').innerHTML = cart.length; 

            
       } else { 
               
           
      document.getElementById('cartCont').innerHTML = 0;
           
      }
       
          
         
    var ship = document.getElementsByName('envioType');
     let percentShip = 0;
       for (let p = 0; p < ship.length; p++){
         if (ship[p].checked) {
           percentShip =  ship[p].value;

           }                                                                                                                                                                       
         }
        
         let costShip= (woShip * percentShip);
       document.getElementById('envio').innerHTML= costShip;
        
       let Total = woShip + costShip;
      document.getElementById('total').innerHTML= Total;

        }  
     

      function modCount(indexPos){ 
    cart[indexPos].count= document.getElementById('cant'+ indexPos).value;
    mostrar(cart);
  }
   document.addEventListener("DOMContentLoaded", function(e){
       getJSONData(CART_INFO_URL).then(function (resultObj) {

        if (resultObj.status === "ok") {
            cart = resultObj.data.articles;//guardo la colección de artículos en cart
            //es un array
    

        mostrar(cart);


        document.getElementById("premiumradio").addEventListener("change", function(){
      percentShip = 0,15;
      mostrar(cart);
});
         
         document.getElementById("expressradio").addEventListener("change", function(){
          percentShip = 0,07; 
        mostrar(cart);
});

      document.getElementById("standardradio").addEventListener("change", function(){
     percentShip = 0,05;
     mostrar(cart);
        });


    

}})
})
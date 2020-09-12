//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


var product = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            /*"name": "Chevrolet Onix Joy",
    "description": "Potenciá tu actitud con Onix Joy que, además de destacarse por su diseño juvenil y moderno, te ofrecé una óptima autonomía, un desempeño equilibrado y el máximo confort interior. \u003cbr\u003eYa sea un viaje largo o un simple paseo por la ciudad, el confort es uno de los puntos fuertes del Onix. Esta versión incluye aire acondicionado, asientos tapizados en tela y gran espacio interior que te garantiza el máximo confort.",
    "cost": 13500,
    "currency": "USD",
    "soldCount": 14,
    "category": "Autos",
    "images": [ 
    ],
    "relatedProducts": [1, 3]
}*/
            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            //let productCurrencyHTML = document.getElementById("productCurrency");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            let productCategoryHTML = document.getElementById("productCategory");
            //let productRelatedProductsHTML = document.getElementById("productRelatedProducts");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency +' '+ product.cost;
            //productCurrencyHTML.innerHTML = product.currency 
            productSoldCountHTML.innerHTML = product.soldCount;
            productCategoryHTML.innerHTML = product.category;
           // productRelatedProductsHTML.innerHTML = product.relatedProducts;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });var comments = {};



getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
         
            comments = resultObj.data;
            /* "score": 3,
    "description": "Ya llevo un año con este auto y la verdad que tiene sus ventajas y desventajas",
    "user": "juan_pedro",
    "dateTime": "2020-02-25 18:03:52"*/
   
    let textToAppend = '';

      for (let i = 0; i < comments.length; i++){
        
        var estrellas = '';
         for (let e = 1 ; e <= 5; e++) {
            if (e<=comments[i].score){
             estrellas += '<i class="fas fa-star checked"></i>'; // full star
             }else{
               estrellas += '<i class="far fa-star"></i>' // empty star
           }
       }
          textToAppend += `<dt><div>` + comments[i].user + ` - ` + comments[i].description + ` | ` + comments[i].dateTime + `  ` + estrellas + `</div></dt>`;
        
          //alert("User " + comments[i].user);
        
      } 
        document.getElementById("comments-list").innerHTML = textToAppend;
    }
});
    
});   
    
    


    
 
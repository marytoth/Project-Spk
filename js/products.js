const ORDER_ASC_BY_PRICE = "$";
const ORDER_DESC_BY_PRICE = "$$";
const ORDER_BY_PROD_BY_REL = "Relevancia";
var currentProductArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortProduct(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_BY_REL){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function showProductList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductArray.length; i++){
        let product = currentProductArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){

            htmlContentToAppend += `
                <div class="col-sm-4 col-md-4 col-lg-4 text-center">
                    <a class="card mb-4 shadow-sm custom-card" href="product-info.html">
                        <h5 class="card-title">`+ product.name + ` </h5>
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">` + product.currency + ' ' + product.cost + `</p>
                            <div class="card-footer"> 
                                <small class="text-muted">` + product.soldCount + ` art??culos</small>
                                <p class="mb-1">` + product.description + `</p>
                            </div>
                        </div>
                    </a>
                </div>
                `;
        }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowProduct(sortCriteria, productArray){
    currentSortCriteria = sortCriteria;

    if(productArray != undefined){
        currentProductArray = productArray;
    }

    currentProductArray = sortProduct(currentSortCriteria, currentProductArray);
     //Muestro las categor??as ordenadas
     showProductList();
    }
    
    //Funci??n que se ejecuta una vez que se haya lanzado el evento de
    //que el documento se encuentra cargado, es decir, se encuentran todos los
    //elementos HTML presentes.
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
                sortAndShowProduct(ORDER_ASC_BY_PRICE, resultObj.data);
            }
        });
    
        document.getElementById("sortCostAsc").addEventListener("click", function(){
            sortAndShowProduct(ORDER_ASC_BY_PRICE);
        });
    
        document.getElementById("sortCostDesc").addEventListener("click", function(){
            sortAndShowCProduct(ORDER_DESC_BY_PRICE);
        });
    
        document.getElementById("sortCostByRel").addEventListener("click", function(){
            sortAndShowProduct(ORDER_BY_PROD_BY_REL);
        });
    
        document.getElementById("clearRangeFilter").addEventListener("click", function(){
            document.getElementById("rangeFilterCountMin").value = "";
            document.getElementById("rangeFilterCountMax").value = "";
    
            minCount = undefined;
            maxCount = undefined;
    
            showProductList();
        });
    
        document.getElementById("rangeFilterCount").addEventListener("click", function(){
            //Obtengo el m??nimo y m??ximo de los intervalos para filtrar por cantidad
            //de productos por categor??a.
            minCount = document.getElementById("rangeFilterCountMin").value;
            maxCount = document.getElementById("rangeFilterCountMax").value;
    
            if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
                minCount = parseInt(minCount);
            }
            else{
                minCount = undefined;
            }
    
            if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
                maxCount = parseInt(maxCount);
            }
            else{
                maxCount = undefined;
            }
    
            showProductList();
        });

    });

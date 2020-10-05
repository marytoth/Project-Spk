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



var lista=[];
        function guardar(){
            var personas={}; //defino el objeto
            var nom=document.getElementById('nombre').value;//obtengo los valores
            var edad=document.getElementById('edad').value;

            personas.nombre= nom;//guardo los valores
            personas.edad=edad;

            
            lista.push(personas); //agrego los valores al final de la colección
            localStorage.setItem("lista",JSON.stringify(lista)); //Guardo la lista en localStorage
            mostrar(lista);//llamo a la funcion para mostrar los datos
        }

        function mostrar(lista){

        var tabla = "<table border =1> <th> Productos </th><th> Precios </th>"; //escribe el encabezado
        for (i=0; i<lista.length; i++){

            tabla+="<tr align='center'><td>" + lista[i].nombre + "</td><td>" + lista[i].edad +"</td></tr>";
        }
        tabla+="</table>";
        document.getElementById('lista').innerHTML=tabla;
        }

        function ordenar(){
            lista.sort( function(ant, sig){
                return ant.edad-sig.edad; //comparo el campo edad
            });
            mostrar(lista);
        }
        function ordenonombre(){
            lista.sort( function(ant, sig){ //comparando el campo nombre
                if (ant.nombre > sig.nombre){
                    return 1;
                }
                if (ant.nombre < sig.nombre) {
                    return -1;
                } 
                return 0;
            
            });
            mostrar(lista);
        }
  
        

document.addEventListener("DOMContentLoaded", function(e){

});
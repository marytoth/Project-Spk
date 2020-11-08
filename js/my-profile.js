//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


                var registro=[];
                
                function guardar(){ 
                    var data={}; //defino el objeto
                    var names=document.getElementById('name&lastname').value;// Llamo a mis values acá
                    //var profileImg=document.getElementById('file-upload').value;
                    var age=document.getElementById('age').value;
                    var mail=document.getElementById('e-mail').value;
                    var phone=document.getElementById('phonenumb').value;

                    data.names= names;//guardo los values- 
                    data.age=age;
                    data.mail=mail;
                    data.phone=phone; 


                   
                    localStorage.setItem("form-data",JSON.stringify(data)); //Mi registro queda guardado en localStorage
                    show(data);//llamo a registro
                }


                
     function show(data){

        var dataform = " <ul><li> Nombre </li><li> Edad </li><li> E-mail </li><li> Telefono </li>"; //escribe el encabezado
        

            dataform+="<ul align='center'><li>" + data.names + "</li><li>" + data.age +"</li><li>" + data.mail + "</li><li>" + data.phone +"</li></ul>";
      
       


        document.getElementById('form-data').innerHTML=dataform; 

}


                document.addEventListener("DOMContentLoaded", function (e) {

});
   
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


function checklogin(user, pass) {
	if(user.trim() === "" || pass.trim() === "") {
		alert("Complete los datos, por favor.");
	} else {
          localStorage.setItem("usuario",user.trim());
          localStorage.setItem("contraseña",pass.trim());
		location.href = "index.html";
	}
}

document.addEventListener("DOMContentLoaded", function(e){

});

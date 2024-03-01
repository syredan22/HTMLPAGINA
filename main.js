//creo una funcion que se ejecuta cuando hago click en el boton
function muestra_oculta(id) {
    //declaro la funcion y paso por parametro el selector de referancia 
    let div = document.getElementById(id);
//declaro la funcion IF para saber si el DIV esta oculto (diplay: none) o si esta visible
if (div.style.display == "none") {
    div.style.display = "flex";
}
else {
    div.style.display = "none";
}







}
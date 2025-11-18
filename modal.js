const abrirBtn = document.getElementById("abreModal");
// const cierraBtn = document.getElementById("cierraModal");
const modal = document.getElementById("modal");
// const enlaces = document.querySelectorAll(".grid-container a")

// enlaces.addEventListener("click", mifuncion);
// function mifuncion(e) {
//     if (e.target.tagName=="IMG") {
//         modal.style.display = "block";
//     }
// };

abrirBtn.onclick = function () {
    
     modal.style.display="block";
}

window.onclick =function(event){
    if (event.target == modal){
        modal.style.display="none";
    }
}


function funcionclick(){

    // document.getElementById("titulo-modal").innerHTML = `${objetoentrada.NombreEspacio()}`;
    modal.style.display="block";


}
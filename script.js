let turno = 0;
let fichas = ["O","X"];
let contador=0;
let fin=false;
//let loser = document.getElementTagName("winn-text");
let botonsarray = Array.from(document.getElementsByTagName("button"));

botonsarray.forEach(x => x.addEventListener("click", ponerFicha));

function ponerFicha(event){
    let botonpulsare = event.target;
        botonpulsare.innerHTML = fichas[turno];
        turno =cambiarturno(turno);
        botonpulsare.innerHTML = fichas[turno];
        contador++;
    
}

function cambiarturno(turno){
    if(turno ==0){
        return turno= turno+1;
    }
    
    if(turno ==1){
        return turno = turno-1;
    }

}
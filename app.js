function Entrada(fecha,titulo,texto){
    this.fecha = fecha;
    this.titulo = titulo;
    this.texto = texto;
    this.caracteres = texto.length ;
}
let sec = document.querySelector("#sec");
let tit = document.createElement("h1");
tit.innerHTML = '<h1 id="encabezado" class = "text-center fw-bold">Bitacora</h1>';
sec.appendChild(tit);
let tml = document.querySelector("form");

tml.innerHTML = `<input id = "titulo" class="form-control my-4" type="text" placeholder="Titulo"  >
<input id = "fecha" class="form-control my-4" type="text" placeholder="Fecha"  >
<input id = "Entr" class="form-control my-4 py-5" type="text" placeholder="Entrada"  >
<button id= "Realizar" class="btn btn-primary ms-4 mb-3">Submit</button>
<button id= "Imprimir"  class="btn btn-primary mb-3">imprimir</button> `;
sec.appendChild(tml);
let tit2 = document.createElement("h2");
tit2.innerHTML = `<h2 class="my-4" >Entradas:</h2>`;
sec.appendChild(tit2);
let F1 ;
let T1 ;
let Tx1 ;
let entry = document.querySelector("#Realizar");

entry.onclick= () => {
    T1 = document.querySelector("#titulo").value;
    F1 = document.querySelector("#fecha").value ;
    Tx1 = document.querySelector("#Entr").value ;
    const Entrada1 = new Entrada(F1,T1,Tx1);
    const paraJSON = JSON.stringify(Entrada1);//  las entradas se imprimen a pesar de que 
    localStorage.setItem( T1, paraJSON ) ;
};
let impres;
let obj;
let imp = document.querySelector("#Imprimir");  
imp.addEventListener("click",imprimiendo());
function imprimiendo(){
    for (let i=0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        obj = JSON.parse(localStorage.getItem(clave));
        impres =  document.createElement("div");
        impres.innerHTML = `
        <div class="card me-3 mb-2">
            <div class="card-body">
                <h3 class="card-title">${obj.titulo}</h3>
                <p class="card-text">${obj.texto}</p>
                <p class="card-text"><small class="text-muted">${obj.fecha}</small></p>
            </div>
        </div>
        `;
        sec.appendChild(impres);

    }
}

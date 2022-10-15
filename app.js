// Variables 
const Titulo1 = document.querySelector("#Titulo1");
const Titulo2 = document.querySelector('#Titulo2');
const Forma = document.querySelector('form');
const Botones = document.querySelector('#Botones');
const Entradas = document.querySelector('#Entradas');
const fixed = document.querySelector('#Clima');

// Funciones 
function Entrada(fecha,titulo,texto){
    this.fecha = fecha;
    this.titulo = titulo;
    this.texto = texto;
}
function Carga(fecha,titulo,texto){
    if (localStorage.getItem(titulo)==undefined){
        const entradaNueva = new Entrada(fecha,titulo,texto);
        const paraJSON = JSON.stringify(entradaNueva);
        localStorage.setItem( titulo, paraJSON ) ;
        Toastify({
            text: "Reaizaste una entrada !",
            duration: 3000,
            gravity: 'top',
            position: 'right',
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
        }).showToast();
    }else{
        swal("Entrada ya exsistente", "Eligue un titulo diferente");
        console.log(localStorage.getItem);
    }
}

function Mostrar(obj){
        let impres =  document.createElement("div");
        impres.innerHTML = `
        <div id = atr class="card shadow m-2" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">${obj.titulo}</h3>
                <p class="card-text">${obj.texto}</p>
                <p class="card-text"><small class="text-muted">${obj.fecha}</small></p>
            </div>
        </div>
        `;
        Entradas.appendChild(impres);
}
function eliminarPantalla(){
    let p = document.getElementsByClassName('card');
    let length = p.length;
    for (let x=0; x <= length ; x++) {
        p[0].remove();
    }
}
function Eliminar() {
    swal({
        title: "Esta seguro?",
        text: "Una vez eliminado no podra recuperar el archivo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
        if (willDelete) {
        swal("Poof! tu documento fue eliminado !", {
            icon: "success",
        });
            localStorage.clear();
            eliminarPantalla();
        } else {
        swal("Tu archivo no eliminado");
        }
    });
}
function Clima(temp,senTerm,upd) {
    let forecast = document.querySelector("#Clima");
    forecast.innerHTML =`
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Temp : ${temp} c</li>
        <li class="list-group-item">Sens T: ${senTerm} c </li>
        <li class="list-group-item">Ultima A: ${upd}</li>
    </ul>`
}

//Calbacks y acciones
fixed.classList.add( "navbar", "fixed-bottom", "bg-light","bg-opacity-50");
Titulo1.classList.add( "text-center", "fw-bold");
Titulo1.innerHTML = "Bitacora";
Titulo2.classList.add( "my-4", "mx-4")
Titulo2.innerHTML = "Entradas:";
Forma.classList.add("mx-3");
Forma.innerHTML =
`<input id = "titulo" class="form-control my-4" type="text" placeholder="Titulo"  >
<input id = "fecha" class="form-control my-4" type="text" placeholder="Fecha"  >
<input id = "texto" class="form-control rol my-4 py-5" type="text" placeholder="Entrada"  >`;
Botones.innerHTML =
`<button id= "subir" class="btn btn-outline-light shadow-lg ms-4 mb-3">Subir</button>
<button id= "imprimir"  class="btn btn-outline-light shadow-lg mb-3">imprimir</button> 
<button id= "eliminarTodo"  class="btn btn-outline-light shadow-lg mb-3">Eliminar Todo </button>`;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '32eada468amsh4f0ae783de9d95ep1583a1jsn09109c9d25c4',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Montevideo&days=3', options)
	.then(response => response.json())
	.then(response => Clima(response.current.temp_c,response.current.feelslike_c,response.current.last_updated))
	.catch(err => console.error(err));


const Subir = document.querySelector('#subir');
const Imprimir = document.querySelector('#imprimir');
const EliminarTodo = document.querySelector('#eliminarTodo');

Subir.addEventListener('click', () => {
        let T = document.querySelector('#titulo').value;
        let F = document.querySelector('#fecha').value;
        let tx = document.querySelector('#texto').value;
        Carga(F,T,tx);
});
Imprimir.addEventListener('click', () => {
    let p = document.getElementsByClassName('card');
    if (p.length > 0) {
        let length = localStorage.length - p.length;
        for (let i=0; i <= length; i++) {
            let clave = localStorage.key(i);    
            let objeto = JSON.parse(localStorage.getItem(clave));
            Mostrar(objeto);
        }
    }else{
        for(let i=0; i<localStorage.length; i++) {
            let clave = localStorage.key(i);    
            let objeto = JSON.parse(localStorage.getItem(clave));
            Mostrar(objeto);
        }
}
});
EliminarTodo.addEventListener('click',Eliminar);

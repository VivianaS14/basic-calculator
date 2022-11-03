const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo-1");
const input2 = document.querySelector("#calculo-2");
const divAlerta1 = document.querySelector(".alerta1");
const divAlerta2 = document.querySelector(".alerta2");
const btnSumar = document.querySelector("#btn-sumar");
const btnRestar = document.querySelector("#btn-restar");
const btnMultiplicar = document.querySelector("#btn-multiplicar");
const btnDividir = document.querySelector("#btn-dividir");
const btnLimpiar = document.querySelector("#btn-limpiar");
const result = document.querySelector("#result");

const alerta = document.createElement("p");
alerta.setAttribute("class", "alerta");

btnSumar.addEventListener('click', sumar);

function sumar() {
  if (input1.value === "") {
    alerta.innerText = "Ingresa un numero valido";
    divAlerta1.appendChild(alerta);
  } else if (input2.value === "") {
    alerta.innerText = "Ingresa un numero valido";
    divAlerta2.appendChild(alerta);
  } else {
    let sumaInputs = Number(input1.value) + Number(input2.value);
    result.innerText = "Resultado: " + sumaInputs;
    limpiar();
  }
}

btnSumar.addEventListener('mouseover', showMessegaSuma);

function showMessegaSuma() {
  result.innerText = "Estas apunto de hacer una suma...";
}

btnRestar.addEventListener('click', restar);

function restar() {
  if (input1.value === "") {
    alerta.innerText = "Ingresa un numero valido";
    divAlerta1.appendChild(alerta);
  } else if (input2.value === "") {
    alerta.innerText = "Ingresa un numero valido";
    divAlerta2.appendChild(alerta);
  } else {
    let restaInputs = Number(input1.value) - Number(input2.value);
    result.innerText = "Resultado: " + restaInputs;
    limpiar();
  }
}

btnRestar.addEventListener('mouseover', showMessegaRestar);

function showMessegaRestar() {
  result.innerText = "Estas apunto de hacer una resta...";
}

btnMultiplicar.addEventListener('click', multiplicar);

function multiplicar() {
  if (input1.value === "") {
    alerta.innerText = "Ingresa un numero valido";
    divAlerta1.appendChild(alerta);
  } else if (input2.value === "") {
    alerta.innerText = "Ingresa un numero valido";
    divAlerta2.appendChild(alerta);
  } else {
    let productoInputs = Number(input1.value) * Number(input2.value);
    result.innerText = "Resultado: " + productoInputs;
    limpiar();
  }
}

btnMultiplicar.addEventListener('mouseover', showMessegaMultiplicar);

function showMessegaMultiplicar() {
  result.innerText = "Estas apunto de hacer una multiplicacion...";
}

btnDividir.addEventListener('click', dividir);

function dividir() {
  if (input1.value === "") {
    alerta.innerText = "Ingresa un numero valido";
    divAlerta1.appendChild(alerta);
  } else if (input2.value === "") {
    alerta.innerText = "Ingresa un numero valido";
    divAlerta2.appendChild(alerta);
  } else {
    let divisionInputs = Number(input1.value) / Number(input2.value);
    result.innerText = "Resultado: " + divisionInputs;
    limpiar();
  }
}

btnDividir.addEventListener('mouseover', showMessegaDividir);

function showMessegaDividir() {
  result.innerText = "Estas apunto de hacer una division...";
}

btnLimpiar.addEventListener('click', limpiar);

function limpiar() {
  input1.value = "";
  input2.value = "";
  alerta.innerText = "";
}


/* input1.addEventListener("mouseout", mensaje);

function mensaje() {
  alert("No me saques el puntero de encima!!")
} */


/* 
//----------------------- Definicion
// A QUIÉN -    QUÉ ACCIÓN - CUAL FUNCION
  btn.addEventListener('click',btnOnClick);

//-------------------- Ejemplo  Mouse Over
const input1 = document.querySelector("#numero1"); 
const form = document.querySelector("#form"); 
const input2 = document.querySelector("#numero2"); 
const btn = document.querySelector("#btncalcular"); 
const suma = document.querySelector("#sumaid");

//addEventListener

form.addEventListener("mouseover", enviarFormulario)

function enviarFormulario(e){
    e.preventDefault();

    alert("virus")
}

//--------------------- Ejemplo Copy
// HTML
// <input type="text" id="textToCopy" value="try copy this text">

// Funcion que muestre un alert cuando copiemos un texto

// Obtenemos el input con querySelector
cost textToCopy = document.querySelector("#textToCopy");
// Agregamos un escuchador a ese input llamado textToCopy
textToCopy.addEventListener("copy", showMessageWhenCopy);

// Creemos la funcion que avise cuando copie el texto
function showMessageWhenCopy() {
  alert('Copiaste el texto capo!!');
}

*/
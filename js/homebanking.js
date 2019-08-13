//Declaración de variables
var nombreUsuario = "John Callum";
var saldoCuenta = 13400;
var limiteExtraccion = 5000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
};

//Funciones que tenes que completar
function cambioLimite(num3) {
  if (num3 > saldoCuenta) {
    alert("El limite excede tu saldo");
    return limiteExtraccion;
  } else {
    limiteExtraccion = num3;
    return limiteExtraccion;
  }
}
function cambiarLimiteDeExtraccion() {
  var limiteNuevo = limiteExtraccion;
  var limite = prompt("Ingrese el nuevo límite de extracción");
  limite = parseInt(limite);
  limiteExtraccion = cambioLimite(limite);
  actualizarLimiteEnPantalla();
}

function restarDinero(num2) {
  if (num2 > saldoCuenta) {
    alert("No tenes suficiente saldo");
  } else {
    saldoCuenta = saldoCuenta - num2;
    return saldoCuenta;
  }
}
function extraerDinero() {
  var saldoAnterior = saldoCuenta;
  var extraccion = prompt("Extraer dinero");
  extraccion = parseInt(extraccion);
  saldoCuenta = restarDinero(extraccion);
  alert(
    "Su saldo anterior es $" +
      saldoAnterior +
      "\n Extracción $" +
      extraccion +
      "\n Su saldo actual es $" +
      saldoCuenta
  );
  actualizarSaldoEnPantalla();
}

function depositarDinero() {
  var saldoAnterior = saldoCuenta;
  var deposito = prompt("Depositar dinero");
  deposito = parseInt(deposito);
  saldoCuenta = sumarDinero(deposito);
  alert(
    "Su saldo anterior es $" +
      saldoAnterior +
      "\n Depositaste $" +
      deposito +
      "\n Su saldo actual es $" +
      saldoCuenta
  );
  actualizarSaldoEnPantalla();
}
function sumarDinero(num1) {
  saldoCuenta = saldoCuenta + num1;
  return saldoCuenta;
}

function pagarServicio() {
  var servicio = prompt(
    "Ingresa el numero del servicio que queres pagar \n 1-agua \n 2-telefono \n 3-luz \n 4-internet"
  );
  servicio = parseInt(servicio);
  switch (servicio) {
    case 1:
      restarDinero(agua);
      actualizarSaldoEnPantalla();
      alert(
        "Pagaste el servicio de agua \n Tu saldo actual es $" + saldoCuenta
      );
      break;
    case 2:
      restarDinero(telefono);
      actualizarSaldoEnPantalla();
      alert(
        "Pagaste el servicio de telefono \n Tu saldo actual es $" + saldoCuenta
      );
      break;
    case 3:
      restarDinero(luz);
      actualizarSaldoEnPantalla();
      alert("Pagaste el servicio de luz \n Tu saldo actual es $" + saldoCuenta);
      break;
    case 4:
      restarDinero(internet);
      actualizarSaldoEnPantalla();
      alert(
        "Pagaste el servicio de internet \n Tu saldo actual es $" + saldoCuenta
      );
      break;
  }
}

function transferirDinero() {}

function iniciarSesion() {}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}

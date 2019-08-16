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

//Funciones mias
function restarDinero(num2) {
  saldoCuenta = saldoCuenta - num2;
}
function sumarDinero(num1) {
  saldoCuenta = saldoCuenta + num1;
}
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
  var limite = limiteExtraccion;
  var limite = prompt("Ingrese el nuevo límite de extracción");
  limite = parseInt(limite);
  limiteExtraccion = cambioLimite(limite);
  actualizarLimiteEnPantalla();
}
function extraerDinero() {
  var saldoAnterior = saldoCuenta;
  var extraccion = prompt("Extraer dinero");
  extraccion = parseInt(extraccion);
  //validaciones
  if (extraccion > saldoCuenta) {
    alert("El monto ingresado es mayor al saldo de su cuenta");
  } else if (extraccion > limiteExtraccion) {
    alert(
      "La cantidad de dinero que deseas extraer es mayor al limite de extracción"
    );
  } else if (extraccion % 100 != 0) {
    alert("Solo puede extraer billetes de 100");
  } else {
    restarDinero(extraccion);
    actualizarSaldoEnPantalla();
    alert(
      "Su saldo anterior es $" +
        saldoAnterior +
        "\n Extracción $" +
        extraccion +
        "\n Su saldo actual es $" +
        saldoCuenta
    );
  }
}
function depositarDinero() {
  var saldoAnterior = saldoCuenta;
  var deposito = prompt("Depositar dinero");
  deposito = parseInt(deposito);
  sumarDinero(deposito);
  actualizarSaldoEnPantalla();
  alert(
    "Su saldo anterior es $" +
      saldoAnterior +
      "\n Depositaste $" +
      deposito +
      "\n Su saldo actual es $" +
      saldoCuenta
  );
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

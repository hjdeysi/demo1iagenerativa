let visible = false;

function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  const boton = document.querySelector(".hero button");

  if (!visible) {
    mensaje.innerText =
      "Comprar ropa de reuso ayuda al planeta y también a tu bolsillo.";
    boton.innerText = "Ocultar mensaje";
    visible = true;
  } else {
    mensaje.innerText = "";
    boton.innerText = "Ver más";
    visible = false;
  }
}

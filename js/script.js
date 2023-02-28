$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var precio = parseFloat($('#precio').val());
    var descuento = parseFloat($('#descuento').val());
    var precioFinal = precio * (100 - descuento) / 100;
    $('#resultado').html('<p>El precio final con descuento es: $' + precioFinal.toFixed(2) + '</p>');

    var tablaCuerpo = $('#tabla-descuentos tbody');
    var fila = $('#tabla-descuentos tbody');
    var nombre = $('#nombre').val();
    fila.append('<tr><td>'+nombre+'</td><td>'+precio+'</td><td>'+descuento+'</td><td>'+precioFinal+'</td></tr>');
  });
});

function resetear()
{
    var Precio = document.getElementById('precio').value;
    var Descuento = document.getElementById('descuento').value;
    var Nombre = document.getElementById('nombre').value;
    
    if (Precio != "" || Descuento != "" || nombre != "")
    {
      document.getElementById('nombre').value = "";
      document.getElementById('precio').value = "";
      document.getElementById('descuento').value = "";
      document.getElementById('resultado').value = "";
    }

}


// tomar un valor como parámetro y agregar  al contenido del elemento(agrega valores al display)
function addDisplay(value) {
  document.getElementById('result').textContent += value;
}
//limpiar los datos de result
function limpiarDisplay() {
  document.getElementById('result').textContent = '';
}

function calculate() {
  var expression = document.getElementById('result').textContent;

  // Enviar la expresión al archivo PHP para el cálculo
  fetch('http://localhost/Calculadora/app/class/Operaciones.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'expression=' + encodeURIComponent(expression)
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById('result').textContent = result;
      document.getElementById('error').textContent = ''; // Limpiar mensaje de error
    })
    .catch(error => {
      console.error('Error en el cálculo:', error);
      document.getElementById('error').textContent = 'Error en el cálculo'; // Mostrar mensaje de error
    });
}
 // Aquí tu código
 const agregar = document.getElementById("agregar");
 
 agregar.addEventListener('click', function () {
    const lista = document.getElementById("lista")
    const li = document.createElement('li')

    const Pregunta = prompt ("Introducir elemento")
    li.textContent = Pregunta
    lista.append(li);
  });
//Ingresar texto
var nombre= prompt("Ingrese su nombre")
alert("Hola "+nombre+"!")
console.log("Hola "+nombre+"!")

// Ingresar número

var anio=prompt("Ingrese su año de nacimiento")
var anio= parseInt(anio) //si no se parsea no se puede sumar (porque lo concatena), sí se puede restar u otras operaciones
var edad=2020 - anio
alert("al finalizar el 2020 Ud tendrá "+edad+" años")
console.log("al finalizar el 2020 Ud tendrá "+edad+" años")

//Concatenar

var apellido = prompt("Ingrese su apellido")
var nombreCompleto = nombre +" "+ apellido
alert("Su nombre completo es " +nombreCompleto)



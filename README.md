# PruebaTecnica
Prueba tecnica - Juan Pablo Rojas Chinchilla

# Ejecucion
Para le ejecucion del backend debe utilizarse el comando "npm run dev" o en su defecto compilar el codigo de typescript y correr el servidor con node como usualmente se hace. El archivo de ejecucion es Node/dist/index.js.
Para la ejecucion del frontend debe utilizarse el comando "npm start" en el directorio de React/prueba

# Anotaciones
En la prueba no pude terminar los delete, ya que tendria que hacerse una eliminacion en cascada dadas las relaciones utilizadas, estas relaciones se utilizaron de esta manera por motivos de no tener datos repetidos en base de datos

# Preguntas prueba tecnica 

## Que tipo de declaraciones de variables conoce y cuales son sus diferencias

var: se utiliza para variables que tienen un alcance de función, esto quiere decir que solo pueden ser utilizadas en una función, estas variables pueden cambiar su valor.
let: se utiliza para variables que tiene un alcance de bloque, esto quiere decir que solo pueden ser utilizadas en un bloque, estas variables pueden cambiar su valor.
const: se utilizan únicamente para constantes, estas variables no pueden cambiar su valor.


## Que es la programacion sincrona y asincrona

la programación síncrona es aquella que sigue los pasos programados uno después de otro, sin hacer procesos paralelos, mientras la programación asíncrona es aquella en la que ocurren varios procesos al mismo tiempo.
Un ejemplo de programación síncrona podría ser el recorrer un arreglo de manera ordenada, ya que no se avanzará en el arreglo hasta terminar la interacción anterior.
Un ejemplo de programación asíncrona es consumir datos de un api, ya que mientras esta está consumiendo los datos el programa puede estar ejecutando otros procesos.
En resumen, la programación asíncrona es cuando se utiliza paralelismo en la ejecución de procesos.


## Que metodos para recorrer arreglos conoce y cuales son sus diferencias

forEach() => este método itera sobre cada elemento del arreglo, y puede realizar una funcion con cada uno de los elementos.
map() => este método recorre un arreglo y crea uno nuevo haciendo una acción en todos los objetos del arreglo original.
filter() => esta recorre un arreglo y nos devuelve otro con los elementos que cumplan con la condición del filtro.
Aunque no sea un método también puede recorrerse un arreglo utilizando únicamente for teniendo un comportamiento muy parecido a un forEach()


## Como eliminar un caracter especifico en un array

Hay varias maneras, por ejemplo podríamos utilizar filter haciendo que el carácter que queramos eliminar no cumpla con la condición del filtro, pero también existen otras formas como por ejemplo la utilización de pop() o splice() que únicamente sirven para eliminar elementos de un arreglo según su índice. (en el caso de pop siempre es el índice "-1").



# Consideraciones
El proyecto no se dejo con la opcion de poder Agregar, Modificar y "Eliminar" en la interfaz grafica por falta de tiempo, estos metodos estan realizados en la parte de backend, ya que pueden realizarse las peticiones por medio de postman o alguna herramienta para hacer peticiones POST y PUT, al editar la base de datos este cambio se vera reflejado en el servidor de react, la base de datos utilizada fue MySQL.
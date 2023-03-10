# PruebaTecnica
Prueba tecnica - Juan Pablo Rojas Chinchilla

# Ejecucion
Para le ejecucion del backend debe utilizarse el comando "npm run dev" o en su defecto compilar el codigo de typescript y correr el servidor con node como usualmente se hace. El archivo de ejecucion es Node/dist/index.js.
Para la ejecucion del frontend debe utilizarse el comando "npm start" en el directorio de React/prueba

# Anotaciones
En la prueba no pude terminar los delete, ya que tendria que hacerse una eliminacion en cascada dadas las relaciones utilizadas, estas relaciones se utilizaron de esta manera por motivos de no tener datos repetidos en base de datos

# Consideraciones
El proyecto no se dejo con la opcion de poder Agregar, Modificar y "Eliminar" en la interfaz grafica por falta de tiempo, estos metodos estan realizados en la parte de backend, ya que pueden realizarse las peticiones por medio de postman o alguna herramienta para hacer peticiones POST y PUT, al editar la base de datos este cambio se vera reflejado en el servidor de react, la base de datos utilizada fue MySQL.


# Preguntas prueba tecnica 

## Que tipo de declaraciones de variables conoce y cuales son sus diferencias

### var
se utiliza para variables que tienen un alcance de funcion esto, quiere decir que solo pueden ser utilizadas en una funcion, estas variables pueden cambiar su valor
### let
se utiliza para variables que tienen un alcance de bloque esto, quiere decir que solo pueden ser utilizadas en un bloque de codigo, estas variables pueden cambiar su valor
### const
se utiliza unicamente para constantes, este valor no puede cambiar en el tiempo

## Que es la programacion sincrona y asincrona

la programacion sincrona es aquella que sigue los pasos programados uno despues de otro, sin hacer procesos paralelos, mientras la programacion asincrona es aquella en la que ocurren varios procesos al mismo tiempo.
Un ejemplo de programacion sincrona podria ser el recorrer un arreglo de manera ordenada, ya que no se avanzara en el arreglo hasta terminar la interacion anterior.
Un ejemplo de programacion asincrona es consumir datos de una api, ya que mientras esta esta consumiendo los datos el programa puede estar ejecutando otros procesos.
En resumen la programacion asincrona es cuando se utiliza paralelismo en la ejecucion de procesos.

## Que metodos para recorrer arreglos conoce y cuales son sus diferencias

forEach() => este metodo itera sobre cada elemento del arreglo, y puede realizar una funcion con cada uno de los elementos.

map() => este metodo recorre un arreglo y crea uno nuevo haciendo una accion en todos los objetos del arreglo original.

filter() => esta recorre un arreglo y nos devuelve otro con los elementos que cumplan con la condicion del filtro.

Aunque no sea un metodo tambien puede recorrerse un arreglo utilizando unicamente for teniendo un comportamiento muy parecido a un forEach()

## Como eliminar un caracter especifico en un array

Hay varias maneras, por ejepmlo podriamos utilizar filter haciendo que el caracter que querramos eliminar no cumpla con la condicion del filtro, pero tambien existen otras formas como por ejemplo la utilizacion de pop() o splice() que unicamente sirven para eliminar elementos de un arreglo segun su indice. (en el caso de pop siempre es el indice "-1").


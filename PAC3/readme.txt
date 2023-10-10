Ejercicio Compositores – Formularios en React

Vamos a crear un ejercicio en el que iremos jugando 
con diferentes compositores. 
Recuerda que, al crear la aplicación, hay que instalar 
también el paquete react-router-dom (npm install react-router-dom).

Paso 1-
Dentro del componente App crea una caja de input. 
Debajo del mismo al cargar la página habrá
un párrafo <p> </p> vacío. Cuando se escriba en la caja, 
veremos lo que está dentro de la caja en el párrafo.
Pistas (seleccionar texto para verlo):

-Ya que es algo que cambiará dentro del componente, 
lo tendremos como el estado (necesitaremos un useState).
-Ya que no queremos que se vea nada al principio, 
el estado inicial será ;;.
-Queremos relacionar la caja del input con el estado, 
para lo que queremos usar la propiedad value.
-Para que se pueda modificar lo que aparece en el input, 
tenemos que usar onChange, y tener una función que recibe 
información sobre el evento del cambio.
-Para leer lo escrito en la caja y pasarlo al estado, 
queremos ver dentro del objeto evento el
valor de su target y dentro de target el value.
-Para modificar el estado, utilizamos setState.
-Mostramos el estado en el párrafo usando {} 
con el nombre de la variable del estado dentro.

Paso 2-
En vez de sólo una caja de texto añadiremos un botón. 
En vez de aparecer el texto escrito según lo escribimos, 
sólo cambiaremos lo que aparece en el párrafo cuando pulsemos el botón.
Pistas (seleccionar texto para verlo):

-Ya que queremos obtener el valor de la caja de texto 
necesitaremos un estado para su valor.
Pero también queremos otro valor que sólo cambia al pulsar el botón, 
y que se muestra cuando cambia. Por lo tanto, 
necesitamos dos estados para esta parte.
-Cuando pulsemos el botón (onClick), queremos cambiar el 
valor del estado que se muestra en el párrafo con el valor del estado del input, 
y tenemos que tener este nuevo estado en el párrafo.

Paso 3-
Añadimos el siguiente array como estado inicial de 
nuestro componente App:
[
'Wolfgang Amadeus Mozart',
'Ludwig van Beethoven',
'Johann Sebastian Bach'
];
Ponemos una lista no ordenada antes del input y el botón, y mostramos los nombres en la lista.
Pistas (seleccionar texto para verlo):
-Utilizaremos el useState para añadir el estado y le pasamos el array como estado inicial
(dentro de las paréntesis).
-Tenemos que crear un array en los que cada nombre aparecerá como un elemento JSX con
&lt;li&gt;&lt;/li&gt; . Podemos hacer esto creando un array nuevo y sumándolos, o (preferiblemente) con
.map . A map le pasamos una función que va a recibir cada uno de los elementos(los strings
con los nombres) y va a hacer un return con el elemento nuevo (el jsx con los &lt;li&gt; y el nombre
dentro)
-Mostraremos este array dentro de un &lt;ul&gt; en el return de la función App

Paso 4-
Al pulsar el botón en vez de mostrar el nombre en el párrafo debajo de la caja de input y el
botón, queremos que se añada el nombre escrito a la lista de nombres.
Pistas (seleccionar texto para verlo):
-Podemos eliminar el párrafo del return y el estado que servía para mostrarlo en el párrafo.
-Al pulsar el botón en vez de copiar el estado asociado al value del input a el estado que
usábamos para mostrar el segundo estado en el párrafo, queremos crear un array que sea
copia del array del estado y añadirle lo que esté escrito en el formulario.
-Tenemos que modificar la función onClick del botón.
-Para crear una copia del array, usabamos [...nombreArrayACopiar]
-Para añadir un elemento, podíamos separar el array con los 3 puntos con una coma y añadir el
elemento nuevo: let nuevoArray = [...nombreArrayACopiar, valorNuevo];
-Queremos modificar el estado con este nuevo array, para modificar el estado usamos
setState(nuevoArray)

Paso 5-
Al añadirse un nombre a la lista, queremos que el input se quede en blanco
Pistas (seleccionar texto para verlo):
-El value del input está asociado a un estado. Poner el estado al valor;

Paso 6-
Añadimos otro input de texto y otro botón. 
Al pulsar el botón queremos que se elimine del array
el compositor que tenga el mismo nombre que lo escrito en la caja.
Pistas (seleccionar texto para verlo):

-Ya que estamos añadiendo otro input, 
necesitamos otro estado en el que tendremos el value
del input. El input tendrá por lo tanto este estado 
como value y una función
(eliminar "Compositor" por ejemplo) que se ejecutará 
al hacer onClick.

-En la función de ejecutar onClick vamos a querer 
modificar el array de nombres que tenemos
en el estado. Para modificar un array recordar que tenemos 
que crear un array nuevo con la
copia del que ya teníamos. La función .filter() 
CREA un array nuevo, a partir del array que
digamos.

-Dentro de filter ponemos una función, que recibe cada elemento. 
Si la función devuelve true, ese elemento se añade al array nuevo, 
si devuelve false no se añade al array nuevo.
-Queremos que la función devuelva false si el elemento del array 
es igual a lo que se ha escrito en el input. Por lo tanto, 
si tenemos el value del input en una variable llamada
nombreAEliminar, dentro de la función que ponemos en filter 
queremos poner 
if(compositor !==nombreAEliminar) { return true; } else { return false; } 
y así el array nuevo tendrá todos los elementos menos el elemento que 
coincida con el escrito en el input.
-Finalmente usamos setState para actualizar el array.

Paso 7-
Más adelante vamos a separar el input que borra un compositor 
a otro componente (y a otra "página" con rutas), así que no vamos 
a poder ver el nombre del compositor a borrar en el
estado. Vamos a necesitar que a la función de eliminarCompositor 
le llegue un string con el nombre 
( function eliminarCompositor(nombre) ). 
Crea una función a la que se llama cuando pulsamos 
el botón de eliminar y que DENTRO de esta función 
cojamos el nombre y llamemos a
eliminarCompositor pasándole el nombre.

Pistas (seleccionar texto para verlo):
-Dentro de la nueva función, llamamos a la función 
eliminarCompositor y le pasamos entre
paréntesis el estado que contiene el nombre a borrar.

-Dentro de eliminarCompositor, no usamos el estado sino que 
usamos la variable que nos llega como argumento (entre paréntesis).

Paso 8-
En vez del array de nombres de compositores, 
vamos a utilizar este array como estado inicial de App:
[
      {
          nombre: 'Wolfgang Amadeus Mozart',
          fecha: 1756,
          canciones: ['Symphonie Nr 40', 'Don Giovanni']},
      {
          nombre: 'Ludwig van Beethoven',
          fecha: 1770,
          canciones: ['Symphonie No.5', 'Piano Sonata No.32']},
      {
          nombre: 'Johann Sebastian Bach',
          fecha: 1685,
          canciones: ['Vivace', 'Largo ma non tanto']
      }
  ]
Pon este array de objeto como el estado inicial y consigue que la app siga funcionando del
mismo modo (queremos seguir mostrando únicamente el nombre del compositor en la lista)
Pistas (seleccionar texto para verlo):
-Al hacer el .map() de los compositores para crear la lista, no queremos utilizar el elemento (por
ejemplo compositor), porque es un objeto. Queremos obtener el nombre de dentro del objeto y
mostrar ese (compositor.nombre por ejemplo).
-A la hora de borrar un compositor, dentro del filter no queremos comprar el elemento (por
ejemplo compositor) con un nombre. El nombre es un string, el elemento es un objeto.
Queremos comparar el nombre DENTRO del objeto con el nombre que recibe la función. En
vez de compositor !== nombre usaremos compositor.nombre !== nombre .
-Al añadir un compositor, no queremos añadir simplemente una cadena de texto al array.
Queremos crear un objeto que tenga una propiedad nombre y añadir ese. Por lo tanto ya no
vale con let nuevoArray = [...nombreArrayACopiar, valorNuevo]; si no que primero crearemos
un objeto let compositor = {nombre: valorNuevo} y después añadiremos el compositor al array:
let nuevoArray = [...nombreArrayACopiar, valorNuevo];

Paso 9-
Separamos la parte de App que muestra la lista de compositores 
en su propio componente y lo pasamos a otro archivo. 
Este componente no tendrá estado, simplemente recibirá una lista de
compositores y los mostrará en una lista.

Pistas (seleccionar texto para verlo):

-Empezar separándolo en un componente dentro del mismo archivo. 
Crear la función function Compositores(). 
Esta función tiene que devolver (return) la parte que ahora mismo 
tenemos de la lista de compositores en el return de App.

-Ya que necesita recibir una lista, usar props.
-El array de objetos de compositores lo va a recibir como props. 
Modificar la parte de .map para
que utilice props.compositores.

-Ya que lo recibe como props, cuando en App añadamos el componente 
Compositores tendremos que pasarle la propiedad compositores 
e igualarlo al array que tiene App.

-Crea el archivo Compositores.js y copia la función aquí. 
Tenemos que importar React (para poder leer correctamente el JSX) 
y hacer un export default (para poder importarlo desde App).
Importarlo desde App (import ... from ;./...;)

Paso 10 -
Extraemos el input y botón de eliminar compositor a un componente propio.
Pistas (seleccionar texto para verlo):
-Empezar separándolo en un componente dentro del mismo archivo. Crear la función function
EliminarCompositor(). Esta función tiene que devolver (return) la parte que ahora mismo
tenemos del botón y el input de eliminar compositor en el return de App.
-Para eliminar hemos usado dos funciones: una que cogía el value del input y otra que recibía
un string y modificaba el array. Para modificar el array que está en el estado de App, la función
tiene que estar dentro de App. Por lo tanto, mueve sólo la función que llama a la función de
eliminarCompositor al componente EliminarCompositor. Para poder usar la otra función,
tendremos que recibirla como props.
-El estado que el input usa en su value también tendrá que estar en el mismo componente.
-Mueve también al componente la función que actualizaba el estado al haber un onChange en
el input.
-En el return queremos mostrar el botón y el campo de texto. Recuerda que un componente en
el return sólo puede devolver UN elemento, por lo que tendremos que envolverlos en una
etiqueta.
-Ya que eliminarCompositor está en el componente padre, no podemos usar
eliminarCompositor(nombreABorrar); , tendremos que recibirlo como props. En el padre pasar
la función al crear el componente &lt;EliminarCompositor
eliminarCompositor={eliminarCompositor} /&gt;
-Crea el archivo EliminarCompositor.js y copia la función aquí. Tenemos que importar React
(para poder leer correctamente el JSX) y useState (para el estado) y hacer un export default
(para poder importarlo desde App). Importarlo desde App (import ... from ;./...;)

Paso 11-
Vamos a crear una ruta en la que podremos eliminar un compositor. Una ruta en la que
tendremos lo mismo que en el inicio (la lista de compositores y el botón de añadir un
compositor) y también podemos escribir el nombre de un compositor para eliminar y clickar en
el botón , en "/eliminar". De momento no añadiremos enlaces, tendremos que escribir la ruta en
el propio navegador (localhost:3000/eliminar).
Pistas (seleccionar texto para verlo):
-Queremos importar los siguientes objetos de dentro del paquete react-router-dom:
BrowserRouter (lo poníamos alrededor de los componentes de nuestra aplicación), y Route
(para definir las rutas con propiedad path="/" y dentro poner el componente que queríamos) :
&lt;Route path="/eliminar"&gt;
&lt;EliminarCompositor /&gt;
&lt;/Route&gt;

Paso 12-
Añadimos una cabecera con enlace al inicio "/" y otro enlace a "/eliminar"
Pistas (seleccionar texto para verlo):
-Queremos añadir un &lt;div&gt; al principio de la página y dentro del mismo queremos utilizar
enlaces de React Router Dom (&lt;Link&gt;), ya que estos no cambian la página y así no resetean
los datos de estado de react.
-Tenemos que importar el componente Link de react-router-dom
-Si en una etiqueta &lt;a&gt; poníamos la dirección de enlace en un href="..." en un &lt;Link&gt; ponemos
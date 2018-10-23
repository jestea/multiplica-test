# Multiplica Test
## Pregunta 1
Crear una función que reciba 2 parámetros, los cuales serán requeridos (no deben ser undefined). Si falta alguno de los parámetros, se debe lanzar un mensaje de error.

## Pregunta 2
Tenemos una función que devuelve una promesa, la cual ocasionalmente tarda en ser resuelta. Queremos asegurarnos que si en 3 segundos no es resuelta, mostraremos un console.log de 'La prome se demoró'.

## Pregunta 3
Crear un programa en el cual al dar click a cada elemento con la clase '.item', se modifique el contenido con la hora actual.
Considerar, la siguiente estructura con 6666 elementos 'li'
```
<ul>
  <li class="item">item 1</li>
  <li class="item">item 2</li>
  <li class="item">item 3</li>
  .
  .
  .
  <li class="item">item 6666</li>
</ul>
```

## Pregunta 4 
Dado sgte codigo
```
var arrPersonas = [
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte']
  },
  {
    name: 'Juan',
    donacion: false,
    esposas: ['Yahaira']
  },
  {
    name: 'Lalo',
    donacion: true,
    esposas: []
  }
]
```
Crear una funcions que reciba como parámetro un número y retorne un obj.
En el cual usaremos el número que recibimos para obtener el obj q este en dicha posición del array arrPersonas, para modificar su nombre a 'choy'.

Si se ingresa una posición, en la cual no exista un obj, devolver un obj vacío
Cabe indicar que no queremos modificar el arrPersonas, así que si hacemos un console al array, este seguirá con los mismos dato.


## Pregunta 5
Dado el obj del archivo trama-examen-1.json, crear la lógica para generar la siguiente estructura (array de objetos)

## Pregunta 6
Dado el siguiente objeto Persona, crea 3 copias de ese objeto, y modificar la edad, aumentando en 1 a cada obj.
```
// obj persona
{
  nombre: 'alex',
  edad: 15
}
```
## Pregunta 7
Dado el siguiente código, realizar la invocación del método 'speak' del objeto cat, para imprimir en consola el valor de la propiedad 'sound' del objeto 'dog'.
```
var talk = talky;
var cat = {
  speak: talk,
  sound: 'miau'
}
var dog = {
  speak: cat.speak,
  sound: 'wof'
}
function talky() {
  console.log(this.sound);
}
```

## Pregunta 8
Dado el sgte array, retornar solo los NOMBRES de las personas que donan órganos y que tienen 1 o más esposas, cuyo nombre empieze con 'Y' o 'N'.
```
[
  {
    name: 'Pepe',
    donacion: true,
    esposas: ['Rosangela', 'Mayte']
  },
  {
    name: 'Juan',
    donacion: false,
    esposas: ['Yahaira']
  },
  {
    name: 'Lalo',
    donacion: true,
    esposas: []
  }
]
```
## Pregunta 9 
Dado el sgte array de personas, crear una función que reciba dicho array y las edades (1 o N parámetros) por las cuales se desea excluir a las personas, retornando solo el nombre de dichas personas.

Por ejemplo, podría ser: functionName(arr, 11) o functionName(arr, 11, 12, 13, ...)
```
// Array de personas:
[
  {
    name: 'Pepe',
    edad: 11
  },
  {
    name: 'Juan',
    edad: 22
  },
  {
    name: 'Lalo',
    edad: 33
  }
]
```
## Pregunta 10
Crear una función la cual reciba como parámetro el código de una bebida, y según las siguientes condicionales nos imprima en consola el siguiente mensaje:
‘Estoy tomando NOMBRE_DE_BEBIDA’

El nombre de la bebida por defecto para los códigos que no existan es: ‘agua de jamaica’.


Casos:
- code1: limonada
- code2: fanta
- code3: cerveza
- code4: kerosene
- code5: gasolina
- code6: chicharra
- code7: pisco
- code8: punto g
- code9: ron
- code10: leche
- code11: quaker
- code12: guarana

## Pregunta 11
Realizar el sgte CRUD en AngularJS o Angular +.


>Recuerda que postulas para el perfil de FrontEnd Developer el cual  demanda un nivel de exigencia alto. 
Está de más decir que se espera una alta calidad de código, patrones de desarrollo y diseño, mantenibilidad, etc. 
Entienda que el ejercicio va a ser revisado por un equipo técnico. Por lo que se le solicita, no deje ningún tópico inconcluso o como supuesto.
Subir el codigo a un repo público en github, y enviarnos el link.
Si tienes alguna duda, escribir a kevin@multiplica.com

***Correos a enviar la solución:
jorgebastidas@multiplica.com
kevin@multiplica.com
aldo@multiplica.com***



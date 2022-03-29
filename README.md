# ReactExerciseTextStatistics

El objetivo de esta práctica es poner en práctica las properties (props) como forma de relaciónar  componentes entre si.

Crearemos una pequeña aplicación como la siguiente:

![Foto](./doc/picture1.png)

Los contadores de "Letras" y "Palabras" se actualizarán automáticamente a medida que introducimos el texto en el `<textarea>`.

El cuatro de texto mantendrá actualizado su contenido con el state correspondiente por medio de un handler que se dispare cada vez que se ha modificado el contenido del cuadro te texto. Consulta cómo vincular un textarea a un state de React.

 "Letras" y "Palabras" serán dos componentes React además del principal App.js. Ambos recibirán un prop 'text' que será un state del componente principal. Ese prop contendrá el texto del cuadro de texto.

 El flujo de eventos será el siguiente:

 `Modificamos textarea > handler > state > props > componentes`

Recuerda estructurar adecuadamente el directorio del proyecto: crear una carpeta `src` en la que iniciar el proyecto de React.
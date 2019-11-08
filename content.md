# Deno: Node.js 

# JavaScript fatigue

https://twitter.com/d4nidev/status/1189429852270747648?s=20
 
 Es una sensación bastante generalizada en el mundo de JavaScript. Seguro que todos hemos hecho la broma más de una vez de que todos los días sale un framework nuevo de JavaScript. Aunque puede que no sea del todo cierto.

https://twitter.com/adamdbradley/status/1188271195671744513?s=20

React salió en 2013
Vue en 2014
Ha pasado bastante tiempo ya.

https://twitter.com/d4nidev/status/1189429852270747648?s=20

En tweet habla en concreto de los hooks de React(que casualmente fue el tema de la charla que di el año pasado en esta conferencia). Pero también aplicaría a la Composition Api de Vue o a Suspense de React.

A pesar de que el tweet me parece un poco injusto, porque parece indicar que por dedicar tiempo a aprender cómo utilizar hooks estamos descuidando nuestra aplicación. Puedo llegar a empatizar con él. Creo que todos hemos tenido la misma sensación. Hay veces que seguir al día con todas las cosas nuevas que aparecen es complicado y requiere mucho tiempo.

A mi no me gusta utilizar el término fatiga. Es un termino que denota algo negativo cuando se puede ver desde un punto de vista positivo: la comunidad de JavaScript está muy activa, hay mucha gente pensando en mejores formas de hacer las cosas.

Podemos categorizar las mejores en dos tipos:

* User-facing improvements
* Developer experience improvements

Por seguir con los ejemplos del mundo de React, podríamos categorizar Suspense como una `User-facing improvements` porque nos ayuda a evitar que el usuario vea nuestra página llena de spinners mientras está cargando.

Por otro lado, los hooks lo pondría dentro de la categoría de Developer Experience. Nos ayudan a tener una lógica reutilizable por varios components. Peor está claro que ningún usuario va a entrar en tu aplicación y va a flipar porque estes utilizando hooks.

Entonces, la fatiga (o como yo prefiero llamarla, la innovación) es algo malo? 

Tenemos que aprender a vivir con el FOMO: Fear of missing out.

https://twitter.com/MonicaCRey/status/1187786961353953283?s=20

Cómo dijo Kitze en una charla hace poco, está bien si tu aplicación no utiliza redux-helicopter 7.4. Está bien si sigues utilizando jQuery o Angular 1 en tus aplicaciones. Nadie te va a juzgar por ello.


Como resumen

https://twitter.com/mrb_bk/status/1187154688229199872?s=20

> "Use what sucks, but in ways you are familiar with" - an old person


# Why I am talking about this?

He hecho esta pequeña introducción sobre la fatiga para intentar que todos tengamos esa visión positiva sobre la fatiga. Al menos   durante lo que dura la charla.

Por qué?

Básicamente porque vengo a hablar sobre un tema que puede causar un poco de fatiga. Vengo a hablar sobre Deno, una librería que podría calificarse como la primera competencia seria de Node.

Esto es algo serio. Node es algo que cualquier desarrollador de JavaScript utiliza a diario. Da igual que hagas backend, frontend, aplicaciones de escritorio o simplemente utilices un editor de código escrito en JavaScript. De manera directa o indirecta estoy seguro de que todos los que estamos aquí reunidos utilizamos Node a diario.

# Disclaimer

Así que, volviendo al título de la charla, es Deno el sucesor de Nodejs?

El título de la charla en realidad es un clibait. Node no se va a ir a ninguna parte. Hay gente muy buena manteniendo node y muchas empresas han invertido en Node.

Además, Deno no está preparado para producción todavía. Le queda bastante recorrido. Tienen planeado lanzar la primera versión estable para finales de año. Y aunque tengan una versión estable, todavía no está muy claro que vaya a tener tracción suficiente para mover al ecosistema. Como veremos más adelante Deno no planea ser compatible con Node, principalmente porque su objetivos es mejorar los errores de diseño que tiene Node.

Ahora mismo Deno no es más que un experimento para early adopters.

# The man behind it

Ryan Dahl creó Node en 2009. Su objetivo principal era crear sevidores http.

Ryan dejo Node en 2012. Pensaba que Go es un mejor lenguaje de programación para crear servidores web y dejó de utilizar Node.

Haber utilizado Go durante estos últimos años ha influenciado muchas de las decisiones de diseño. Por ejemplo, la std de Deno está muy influenciada por la de Go. Subcomandos como `deno fmt` también vienen inspirados por Go. Incluso la primera versión de Deno estaba implementada en Go, pero finalmente está siendo implementado en Rust.

# 10 things he regret about Node

Durante la JSConf de 2018, Ryan dio una presentación en la que explicaba las decisiones de diseño que tomo cuando estaba trabajando en node y de las que se arrepiente. Mejorar todas estas decisiones es lo que ha llevado a crear Deno.

Es un ejercicio de autocrítica que deberíamos hacer todo. La crítica es la única forma de mejorar las cosas. Todos deberíamos hacer autocrítica de los proyectos en los que estamos trabajando.

Incluso deberíamos ser más abierto a las críticas de las tecnologías que nos gustas. Este fue uno de los mensaje de la última React Conf hacía la comunidad. Por mucho que a todos nos guste React, está lejos de ser perfecto. Si fuera perfecto no habría necesidad de seguir trabajando para mejorarlo.
La comunidad necesita ser más abierta a la crítica y no tomar las críticas como un ataque y reaccionar a la defensiva. Sino aprovechar las críticas como una oportunidad de ver las cosas desde un punto de vista distinto y una oportunidad para mejorar.

# Bugs vs this is how it works

Cuando nos familiarizamos con una tecnología tendemos a aceptar las pequeñas cosas que en un principio nos resultaban molestas y simplemente aceptar que así es como funcionan las cosas.

De vez en cuando debemos preguntarnos por qué las cosas funcionan así. Y si no habría una forma de mejorarlas.

# Why?

JavaScript ha cambiado bastante desde que Node fue diseñado en 2009

# Promises/async/await

Hubo un momento de la historia de Node en que las APIs del core devolvían promesas en vez de utilizar callbacks. Pero se decidieron cambiarlas y utilizar callbacks en su lugar. El principal motivo es que no todo el mundo estaba de acuerdo en que las promesas fueran una buena abstracción. Además introducían un overhead. Por eso decidieron utilizar callbacks.

Hubo intentos de volver a re-introducir las promesas, pero no llegaron a buen puerto.

https://github.com/nodejs/node/issues/4596

Cuando las promesas y async/await formaron parte del standard, y que el uso se empezó a standarizar, los motores de javascript empezaron a introducir optimizaciones para mejorar el performance.

https://v8.dev/blog/fast-async


Han pasado los años y ya todos nos hemos acostumbrado a trabajar con Promises y async/await. Incluso las nuevas apis de los navegadores ya las utilizan. A día de hoy no tiene sentido seguir utilizando callbacks.

Desde Node 10 tenemos

```
const fs = require('fs').promises;
```

Pero muchas otras APIs todavía siguen funcionando únicamente con callback y para poder utilizarlas con async/await no nos queda otra que util `util.promisify`

```
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();
```

# Module System

Cuando crearon Node, en JavaScript no existía el concepto de modulos. Era una necesidad que tenía Node y no existía en el navegador. Con los requisitos que tenían en ese momento, crearon CommonJS. La integración de ES modules parece que está costando bastante esfuerzo y hay cosas que han creado bastante controversia como la utilización de la extension `mjs` en lugar de `js`. 

https://github.com/nodejs/modules/blob/master/doc/plan-for-new-modules-implementation.md

Deno utiliza ES Modules por defecto, pero además simplifica radicalmente el algoritmo de resolución de dependencias.

En Deno los imports pueden ser relativos o pueden ser urls.

```
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
```

La primera vez que Deno encuentre este import, se descargará la dependencia a una carpeta local y las siguientes veces que ejecutes tu programa utilizará la copia local. (A no ser que específiques la opción `--reload` que te permitirá bajarte de nuevo las dependencias). 

Esto tipo de imports tiene varias implicaciones.
- La primera de todas es que no va a hacer falta más package.json donde declarar todas las dependencias. Si necesitas declarar una dependencia no tienes más que añadir el  import y el propio runtime se encargaré de descargarse las dependencias.

- La segunda es que los autores de dependencias pueden publicar las dependencias donde ellos quieran. No están forzados a utilizar una herramienta centralizada como NPM.

Si nos paramos a pensar, la relación entre NPM y Node es curiosa. NPM es una empresa privada que lleva el registro donde están publicadas todas las dependencias. No estoy diciendo que hasta ahora NPM haya hecho un mal trabajo, creo que todo lo contrario, parte del éxito que ha tenido Node ha sido gracias a NPM.

El problema es que de vez en cuando tenemos algún recordatorio de que el objetivo principal de las empresas es ganar dinero. Por ejemplo, seguro que ya todos estamos acostumbrados a abrir una ventana de incognito cada vez que nos aparece este mensaje.

> Captura de Medium

> GitHub con el contrato de ICE (Immigration and Customs Enforcement (ICE))

https://twitter.com/beajammingh/status/1189982334365265921?s=20

> NPM CEO

Qué pasa cuando esa misma compañía cambia de ceo y empieza a tomar decisiones con las que podemos no estar del todo de acuerdo.

https://www.theregister.co.uk/2019/04/01/npm_layoff_staff/
https://www.theregister.co.uk/2019/04/22/npm_fired_staff_union_complaints/

CJ Silverio tiene una charla muy interesante acerca de todo esto que se llama the economics of package-management. CJ Silverio era la CTO y la empleada numero 2 de NPM y ya no está trabajando para NPM.

https://speakerdeck.com/ceejbot/the-economics-of-package-management

* open source generates a lot of value
* most of us give away source code not expecting money
* our common registry of shared code is owned by a private company
* packages cost money even if you are not paying for them
* companies don't love you not even ones that makes things you like
* npm is obligated to its owners not us

La charla termina con la justificación de por qué están trabajando en Entropic

Entropic: a federated package registry for anything

https://github.com/entropic-dev/entropic

Pero volvamos a Deno

```
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
```

Es una solución elegante al problema de la centralización. Es similar a como funcionan los navegadores

```
<script src=""></script>
```

* No más `node_modules` una variable de entorno para indicar dónde buscar los módulos es suficiente.
* La extension al final del fichero son requeridas. Así evitas que el loader tenga que adivinar cual es el fichero que quieres cargar y tenga que hacer varias llamadas al sistema operativo. Ser más explicitos ahorra problemas.
* No more index.js. Fue un añadido innecesario que complicó el algoritmo de resolución.

Pero, eso quiere decir que voy a tener que aprenderme todas las urls de las dependencias que utilizo porque tengo que duplicarlas en todos los ficheros?

En realidad no, una solución muy sencilla es centralizar todos los imports en el mismo fichero, de forma que puedas hacer algo similar a

```
// deps.ts
export { test, assertEquals } from "https://deno.land/std/testing/mod.ts";

// main.ts
import { test, assertEquals } from "./deps.ts";
```

La otra opción que tenemos es utilizar import maps

```
// import_map.json
{
   "imports": {
      "http/": "https://deno.land/std/http/"
   }
}

// main.ts
import { serve } from "http/server.ts";

// cli
deno run --importmap=import_map.json hello_server.ts
```


# Security

V8 es un sandbox seguro. Cuando estamos navegando en nuestro navegadores no vamos con miedo de que web maliciosas puedan ejecutar código arbitrario en nuestro ordenador y por ejemplo tratar de robarnos nuestros bitcoins.

A pesar de que también utiliza V8, han eliminado todos los mecanismo de seguridad que garantizarían el sandbox seguro.

https://github.com/dominictarr/event-stream/issues/116
https://github.com/dominictarr/event-stream/issues/116#issuecomment-441749105
https://schneider.dev/blog/event-stream-vulnerability-explained

* `event-stream` es un paquete muy popular creado por dominictarr
* dominictarr mantiene muchos proyectos y ya no tiene tiempo para mantener mantener, por lo que le sede el control a otro.
* en un principio los commits del nuevo maintainer parecían inocuos
* Añadió una librería `flatmap-stream` y luego varios días después decidió eliminar la dependencia y implementar el código directamente.
* `flatmap-stream` parecía inofensiva en github, el problema es que la versión que había publicada en npm incluía el código malicioso.
* Básicamente este código buscaba en tus dependencias el paquete `copay-dash` y si existía intentaba robar los bitcoins.

Se podría haber evitado este ataque con un entorno sandboxed?

Por defecto, los scripts se ejecutan sin acceso a la red o al sistema de ficheros. Los usuarios que ejecutan el script deben dar acceso mediante flags

```
--allow-env
--allow-net
--allow-read
--allow-write: 
--allow-run: Allow running subprocess
```

Secure execution by default. They cannot access the disk or access the network. Allow

```
--allow-read=/tmp
--allow-net=google.com
```

Añadir screenshots con el prompt

# TypeScript

Todos los que me conocen saben que me encanta TypeScript y que intento utilizarlo en todos los proyectos en los que trabajo.

El otro día había vi un thread en twiter qué preguntaba cuales eran las razones para utilizar TypeScript

https://twitter.com/Una/status/1187189409545936902?s=20

* It gives my editor super powers https://twitter.com/jkup/status/1187195155335376896?s=20

* I dislike guessing https://twitter.com/teapot/status/1187442576917315584?s=20

Y esta razón es con la que más identificado me siento ahora mismo. Pase de estar trabajando en un proyecto con 

* Typescript en el servidor + Graphql y typescript en el client
* A rest con javascript en el servidor y en el cliente

No es un proyecto pequeño y además no estoy muy familiarizado con el dominio. Y siento que paso mucho tiempo en las devtools preguntandome viendo qué es lo que me devuelve la api o qué forma tiene este objeto que utilizamos en el frontend.

Deno integra el compilador de typescript, así que puedes escribir tus ficheros en typescript sin necesidad de compilarlos previamente.

> Ejemplo ejecutando código ts

Y mejor aún, puedes hacer un import de una librería externa directamente en typescript.

> Ejemplo con dependencia ts

Internamente Deno también utiliza JavaScript para escribir así que tiene la ventaja de tener la API perfectamente tipada y documentada

https://deno.land/typedoc/

Incluir el compilador de typescript trae consigo una penalización en tiempo de arranque. Pero están intentando reducirla al máximo utilizando cosas como V8 snapshot.

V8 Snapshot básicamente consiste en que arrancan el compilador de typescript y una vez está cargando le sacan una foto al estado del heap y lo guardan a fichero. Una vez creado este snapshot el siguiente arranque será mucho más rápido.

# STD library

Node uuid

https://twitter.com/jlongster/status/1189621985631965184?s=20

Node siempre ha intentando mantener un core lo más mínimo posible. Incluyendo únicamente las mínimas funciones necesarias. Esto ha hecho que muchas de las utilidades básicas que te hacen falta para crear una aplicación se hayan creado como paquetes. En mucho de los casos como micropaquetes. Lo que lleva a que exista un paquete standard para hacer cosas comunes con logging.  Esto puede llevar a que tu aplicación tenga dentro 3 librerías distintas para hacer logging como dependencias transitivas.

La filosofía de Deno es distinta en este apartado. Quieren mantener una Standard Library. Que no forma parte directamente del core, pero si que se versionará junto con el core y tendrá un carácter oficial

https://github.com/denoland/deno_std


```
import { pad } from "https://deno.land/std/strings/pad.ts";
pad("deno", 6, { char: "*", side: "left" }) // output : "**deno"
```

# Full toolset

Además de una standard library quieren proveer un toolset completo de comandos.

```
deno fmt (format files, using prettier)
deno test (run tests)
deno install (similar npm install --global)
deno bundle (generate a single .js including all dependencies)
deno eval (eval a script)
deno xeval (eval a script based on text segments from stdin)
x deno compile (build a single binary distributable)
x deno doc (generate a JSON structure documenting the code)
x deno ast (generate a JSON structure of the AST of the code)
x deno lint
```


# Browser compatible

Deno try to be compatible with browser where is possible.\

Un ejemplo de esto es que en Deno no existe una variable `global` sino que utilizan el mismo nombre que utilizan en los navegadores `window`.

Las funcionalidades propias de Deno están dentro de la variable global `Deno`. Si tu script no utiliza ninguna funcionalidad no utiliza ninguna de estas funciones, debería ser compatible con el navegador.

# How does this work internally

# Benchmarks



# Feedback vendetianos

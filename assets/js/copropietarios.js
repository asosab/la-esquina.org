// copropietarios.js
//
// Fuente de verdad del tablero de la-esquina.org.
//
// FORMATO NUEVO (planv3): cada entrada es un objeto con nombre y estado.
//   { nombre: "Nombre Apellido", estado: "registrado" }   -> se anotó, todavía no pagó
//   { nombre: "Nombre Apellido", estado: "confirmado" }   -> ya pagó su cuota
//
// Por compatibilidad, una entrada que sea directamente un string (sin
// llaves) se interpreta como "confirmado", que era el comportamiento del
// archivo viejo. Podés dejar así las entradas históricas si no querés
// reescribirlas todas.
//
// EL ORDEN IMPORTA: es el orden de llegada. Los primeros 148 nombres de
// esta lista ocupan los puestos de dueño de estante en el tablero. Todo
// lo que venga después del puesto 148 es lista de espera automática: no
// hace falta marcar a nadie como "en espera", alcanza con que esté más
// abajo en el array.
//
// Si alguien de los primeros 148 no paga dentro de la semana desde que se
// lo invita a confirmar, se lo saca de la lista (o se deja su entrada pero
// se anota aparte) y quien estaba primero en la lista de espera sube al
// puesto 148: es una edición manual de este archivo, el sitio no lo hace
// solo.
//
// IMPORTANTE: los dos estantes especiales (Estante de los Miedos y el de
// intercambio/donación) NO van en este archivo. Están definidos aparte,
// directamente en index.html, porque son fijos y no dependen del registro.

const COPROPIETARIOS = [
  // Ejemplos de referencia; reemplazar por los registros reales.
  { nombre: "Alejandro Sosa", estado: "confirmado" },
  { nombre: "Ejemplo Registrado Sin Pagar", estado: "registrado" },

  // Formato viejo, todavía soportado (se toma como "confirmado"):
  // "Nombre Apellido",
];

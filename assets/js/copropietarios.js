/**
 * La Esquina — lista de copropietarios de estante
 *
 * Orden = índice del estante en el tablero (0-based).
 * - Cadena con nombre → estante ocupado (se pinta y muestra tooltip al hover)
 * - null / "" / undefined → estante disponible
 *
 * Editar solo este archivo para actualizar el tablero.
 * Paso intermedio antes de conectar a API + base de datos.
 *
 * Convención actual:
 *   [0]  Reservado para donación / intercambio
 *   [1]  Estante de los Miedos
 *   [2…] Dueños de cuota (personas o instituciones)
 */
const COPROPIETARIOS = [
  "Reservado para donación",
  "Estante de los Miedos",
  //"Alejandro Sosa"
  // Añadir aquí los siguientes nombres en el mismo orden del tablero.
  // Ejemplo:
  // "Nombre Apellido",
];

// Exporta para uso en módulos si más adelante se convierte en ES module.
// Por ahora se carga como script clásico y deja la constante global.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { COPROPIETARIOS };
}

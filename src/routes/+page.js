// src/routes/+page.js

// Esto le dice a Svelte: "Construye esto como HTML estático al compilar"
export const prerender = true;

// Mantenemos CSR en true (por defecto) solo para que funcionen 
// cosas interactivas pequeñas (como el botón de menú móvil de Bootstrap si lo usas).
// Si no usas interactividad, podrías ponerlo en false y sería aún más ligero.
export const csr = true;
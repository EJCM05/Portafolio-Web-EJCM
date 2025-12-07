<script>
    import { page } from '$app/stores';

    // Diccionario simple para mensajes personalizados según el error
    const messages = {
        404: "La ruta que buscas no existe o ha sido movida.",
        500: "Error interno del servidor.",
        503: "Servicio no disponible temporalmente."
    };

    // Obtiene el mensaje o usa uno genérico
    $: message = messages[$page.status] || $page.error?.message || "Ocurrió un error inesperado.";
</script>

<div class="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
    
    <h1 class="display-1 fw-bold text-danger ">
        {$page.status}
    </h1>

    <h2 class="h4 mb-4 text-dark">
        {message}
    </h2>

    <a href="/" class="btn btn-outline-danger px-4 py-2">
        Volver al CV
    </a>

</div>

<style>
    /* Un pequeño ajuste para que el número grande no se vea tan agresivo */
    .opacity-25 {
        opacity: 0.25;
    }
</style>
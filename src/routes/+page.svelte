<script>
    import resume from '$lib/data/resume.json';
    const currentYear = new Date().getFullYear();
</script>

<div class="container py-5 bg-p animate__animated animate__fadeIn" style="max-width: 850px;">
    
    <header class="border-bottom pb-4 mb-5">
        <div class="row align-items-center text-center text-md-start">
            <div class="col-md-8">
                <h1 class="display-6 fw-bold text-dark mb-1">{resume.personal.name}</h1>
                <h2 class="h5 text-danger fw-medium mb-3">{resume.personal.role}</h2>
            </div>
            
            <div class="col-md-4 text-md-end text-muted small">
                <div class="mb-1">📍 {resume.personal.location}</div>
                <div class="mb-1">📞 {resume.personal.phone}</div>
                <div class="mb-1">
                    📧 <a href="mailto:{resume.personal.email}" class="text-decoration-none link-dark"
                        >{resume.personal.email}</a
                    >
                </div>
                <div>
                    🐙 <a
                        href={resume.personal.github}
                        target="_blank"
                        class="text-decoration-none link-dark">GitHub Profile</a
                    >
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="mb-5">
            <h3 class="section-title fs-4">Perfil Profesional</h3>
            <p class="text-secondary" style="line-height: 1.8;">{resume.personal.summary}</p>
        </section>

        <section class="mb-5">
            <h3 class="section-title">Experiencia Laboral</h3>

            {#each resume.experience as job}
                <div class="mb-4 ps-2 border-start border-3 border-light"> <div class="d-flex justify-content-between align-items-baseline flex-wrap mb-1">
                        <h4 class="h5 fw-bold text-dark mb-0">{job.role}</h4>
                        <span class="badge bg-danger text-white border fw-normal p-2">{job.period}</span>
                    </div>
                    <div class="text-danger small fw-semibold mb-2">{job.company}</div>
                    <p class="text-secondary small mb-0">{job.description}</p>
                </div>
            {/each}
        </section>

        <section class="mb-5">
            <h3 class="section-title">Proyectos Destacados</h3>

            <div class="row g-3">
                {#each resume.projects as project}
                    <div class="col-md-6">
                        <div class="card h-100 border bg-white"> 
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <h5 class="card-title h6 fw-bold text-dark mb-0">{project.name}</h5>
                                    {#if project.link !== '#'}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            class="text-primary small text-decoration-none fw-semibold">Ver ↗</a
                                        >
                                    {/if}
                                </div>
                                <h6 class="card-subtitle mb-2 text-muted small fst-italic">
                                    {project.tech}
                                </h6>
                                <p class="card-text small text-secondary">{project.desc}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </section>

        <div class="row">
            <div class="col-md-8 mb-4">
                <section>
                    <h3 class="section-title">Tecnologías & Herramientas</h3>
                    <div class="d-flex flex-wrap gap-2">
                        {#each resume.skills as skill}
                            <span class="badge bg-white text-secondary border border-danger-subtle fw-normal p-2 fs-6"
                                >{skill}</span>
                        {/each}
                    </div>
                </section>
            </div>

            <div class="col-md-4">
                <section class="mb-4">
                    <h3 class="section-title">Educación</h3>
                    <ul class="list-unstyled text-secondary small">
                        {#each resume.education as edu}
                            <li class="mb-3">
                                <strong class="text-dark d-block">{edu.degree}</strong>
                                {edu.institution} <br />
                                <span class="text-muted fst-italic">{edu.period}</span>
                            </li>
                        {/each}
                    </ul>
                </section>

                <section>
                    <h3 class="section-title">Idiomas</h3>
                    <ul class="list-unstyled text-secondary small">
                        {#each resume.languages as lang}
                            <li class="mb-1 text-dark">• {lang}</li>
                        {/each}
                    </ul>
                </section>
            </div>
        </div>
    </main>

    <footer class="mt-5 pt-4 border-top text-center text-muted small">
        <p>© {currentYear} Eber J. Colmenares M.</p>
    </footer>
</div>

<style>
    /* Estilo reutilizable para los títulos de sección */
    .section-title {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #2c3032; /* Gris Bootstrap */
        border-bottom: 2px solid #dee2e6; /* Gris muy suave */
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
    }

    /* Ajustes específicos para impresión (Se mantiene igual de funcional) */
    @media print {
        :global(body) {
            background-color: white !important;
        }
        .text-primary {
            color: #000 !important; /* El azul se vuelve negro al imprimir */
        }
        .badge {
            border: 1px solid #000 !important;
            color: #000 !important;
        }
        a {
            text-decoration: none !important;
            color: black !important;
        }
        .section-title {
            border-bottom: 2px solid #000 !important;
            color: #000 !important;
        }
    }
</style>
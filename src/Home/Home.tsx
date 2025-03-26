import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Sección 1: Presentación */}
      <section className="presentation presentation-bg full-height">
        <a href='/acerca-de-mi'>Hola, mi nombre es David!</a>
        <h1>Bienvenido!</h1>
        <p>
          Soy un desarrollador full stack con 3 años de experiencia en frameworks como Angular, React y Laravel.
        </p>
      </section>

      {/* Sección 2: Proyectos realizados */}
      <section className="projects projects-bg full-height">
        <h2>Proyectos Realizados</h2>
        <div className="project-cards">
          <div className="card">
            <h3>Proyecto 1</h3>
            <p>Descripción breve del Proyecto 1.</p>
          </div>
          <div className="card">
            <h3>Proyecto 2</h3>
            <p>Descripción breve del Proyecto 2.</p>
          </div>
          <div className="card">
            <h3>Proyecto 3</h3>
            <p>Descripción breve del Proyecto 3.</p>
          </div>
        </div>
      </section>

      {/* Sección 3: Llamado a la acción */}
      <section className="cta cta-bg full-height">
        <h2>¿Interesado en trabajar conmigo?</h2>
        <p>
          Ya sea que seas un cliente buscando soluciones o un reclutador buscando talento, estoy aquí para ayudarte.
        </p>
        <button>Contáctame</button>
      </section>

      {/* Sección 4: Formulario de contacto */}
      <section className="contact-form contact-form-bg full-height">
        <h2>Formulario de Contacto</h2>
        <form>
          <label>
            Nombre:
            <input type="text" name="name" required />
          </label>
          <label>
            Correo Electrónico:
            <input type="email" name="email" required />
          </label>
          <label>
            Mensaje:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Home;

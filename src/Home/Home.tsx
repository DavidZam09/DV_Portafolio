import './Home.css';
import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import Spinner from '../components/Spinner'; // Import Spinner component

function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); // State for spinner

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name) newErrors.name = 'El nombre es obligatorio.';
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido.';
    }
    if (!formData.message) newErrors.message = 'El mensaje es obligatorio.';
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true); // Show spinner
      emailjs
        .send(
          'service_m9nxd9n', // Service ID
          'template_2q5y9im', // Contact Template ID
          formData, // Form data to send
          'GYg574oC0ahubA27P' // Public Key
        )
        .then(
          () => {
            toast.success('Formulario enviado correctamente.'); // Success toast
            setFormData({ name: '', email: '', message: '' }); // Reset form
            setIsSubmitting(false); // Hide spinner

            // Send thank-you email
            emailjs.send(
              'service_m9nxd9n', // Service ID
              'template_bjib0rn', // Thank-you Template ID
              { email: formData.email }, // Data for thank-you email
              'GYg574oC0ahubA27P' // Public Key
            ).then(
              () => {
                console.log('Correo de agradecimiento enviado.');
              },
              (error) => {
                console.error('Error al enviar el correo de agradecimiento:', error);
              }
            );
          },
          (error) => {
            console.error('Error al enviar el formulario:', error);
            toast.error('Hubo un error al enviar el formulario. Inténtalo de nuevo.'); // Error toast
            setIsSubmitting(false);
          }
        );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData: FormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="home">
      {/* Sección 1: Presentación */}
      <section className="presentation presentation-bg full-height">
        <a href='/acerca-de-mi'>Hola, mi nombre es David!</a>
        <h1>Bienvenido!</h1>
        <p>
          Soy un desarrollador full stack con experiencia en frameworks como Angular, React y Laravel.
        </p>
      </section>

      {/* Sección 2: Proyectos realizados */}
      <section className="projects projects-bg full-height">
        <h2>Proyectos Realizados</h2>
        <div className="project-cards">
          <div className="card">
            <img src="https://www.ultralav.com.co/wp-content/uploads/2023/02/LOGO-300x156.png" alt="Proyecto 1" />
            <h3>Ultralav WebSite</h3>
            <p>Landing Page para la empresa <a href='https://www.ultralav.com.co/' target='_blank'>Ultralav S.A.S</a> </p>
          </div>
          <div className="card">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAlgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAwQCBQEH/8QALhAAAgICAQIDBwMFAAAAAAAAAAECAwQRMRIhBRMyIjRBUWFxsRSRoSNCU3KB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcW211Lds4xX1ZLDyP1VcppaSm0vqis64Wa8yEZa46lsyeE9qLEv8sgO78uyvI8mmh2y6ep+1rR3j3XWSatx3Ukuz6t7Iyx8l5ltldka4ySSk11P9jrHuuhkvGyHGUunqjNLW0AnmSdk4Y9ErujtJp6SZfGvhkVKcN/Jp8pmbwj3JP4uTb+4wO2VmJcdaf/AEDcCeRTG+qVc+H/AAefW7MuaxLuKX/Ve/XrgD1CORkVY8W7JpPW1HfdleOCOXXXKmyUoRclB6bXddgOsa13UQsa05LejPLMtd1kKcV2KD05Keinh3uNP+pCrGy4ytcbY1Kdjl6epsDVj22WRk7qfK18HLZnefJp2V4050rme/wjiWRZLFy6rUlbVHTceGmuTVhRSwqUl2cF+AKVWRtrjOD3GS2mdmLwj3TXwU2kbQAAAAAAZfD6p01TjZHTdja7/A1ADHNZVN051Lzq5/2Slpxf0PuPTbLIeRkKMZdPTGEXvSNYAwQrycSU4UVRtrlLqj7WukthUSphJ2NOyyXVLXBpAEsl2qmXkR6rH2Xfj6mR4c6I1WY/tXQ9e360+T0AB8XHGji+LlTZGK23FpfsUAEMKuVWLXCa1KK7ohH9ZjuUIwV8G9xlKemvubgBkx8aWrpZDTnd6lHhL5Eq45tFPkQrhJLtG3q1pfY9AARxKFj48Kk965fzZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" alt="Proyecto 2" />
            <h3>Proyecto 2</h3>
            <p>Descripción breve del Proyecto 2.</p>
          </div>
          <div className="card">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAlgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAwQCBQEH/8QALhAAAgICAQIDBwMFAAAAAAAAAAECAwQRMRIhBRMyIjRBUWFxsRSRoSNCU3KB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcW211Lds4xX1ZLDyP1VcppaSm0vqis64Wa8yEZa46lsyeE9qLEv8sgO78uyvI8mmh2y6ep+1rR3j3XWSatx3Ukuz6t7Iyx8l5ltldka4ySSk11P9jrHuuhkvGyHGUunqjNLW0AnmSdk4Y9ErujtJp6SZfGvhkVKcN/Jp8pmbwj3JP4uTb+4wO2VmJcdaf/AEDcCeRTG+qVc+H/AAefW7MuaxLuKX/Ve/XrgD1CORkVY8W7JpPW1HfdleOCOXXXKmyUoRclB6bXddgOsa13UQsa05LejPLMtd1kKcV2KD05Keinh3uNP+pCrGy4ytcbY1Kdjl6epsDVj22WRk7qfK18HLZnefJp2V4050rme/wjiWRZLFy6rUlbVHTceGmuTVhRSwqUl2cF+AKVWRtrjOD3GS2mdmLwj3TXwU2kbQAAAAAAZfD6p01TjZHTdja7/A1ADHNZVN051Lzq5/2Slpxf0PuPTbLIeRkKMZdPTGEXvSNYAwQrycSU4UVRtrlLqj7WukthUSphJ2NOyyXVLXBpAEsl2qmXkR6rH2Xfj6mR4c6I1WY/tXQ9e360+T0AB8XHGji+LlTZGK23FpfsUAEMKuVWLXCa1KK7ohH9ZjuUIwV8G9xlKemvubgBkx8aWrpZDTnd6lHhL5Eq45tFPkQrhJLtG3q1pfY9AARxKFj48Kk965fzZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==" alt="Proyecto 3" />
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
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Mensaje:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : 'Enviar'}
          </button>
        </form>
      </section>
    </div>
  );
}

export default Home;

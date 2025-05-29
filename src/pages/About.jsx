import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-4">
      <h1>About</h1>
      <p>Esta es la página de información sobre nuestra aplicación.</p>

      <h2>¿Qué hacemos?</h2>
      <p>
        Nuestra aplicación está diseñada para brindar la mejor experiencia al usuario, ofreciendo funcionalidades avanzadas y un diseño intuitivo.
      </p>

      <h3>Características principales:</h3>
      <ul>
        <li>Interfaz amigable y responsiva</li>
        <li>Soporte multiplataforma</li>
        <li>Actualizaciones constantes con mejoras</li>
      </ul>

      <h3>Misión</h3>
      <p>
        Nuestro objetivo es ayudar a los usuarios a alcanzar sus metas con herramientas eficientes y fáciles de usar.
      </p>

      <h3>Contacto</h3>
      <p>
        Para más información, puede contactarnos en <a href="mailto:info@miapp.com">info@miapp.com</a>.
      </p>
    </Container>
  );
};

export default About;

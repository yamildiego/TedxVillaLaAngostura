import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Page from './../Page';
import './Ted.css';

class Ted extends Component {
    render() {
        return (
            <Page title="¿Qué es TED?">
                <div className="Ted">
                    <p>
                        TED es una organización sin fines de lucro cuya misión es difundir ideas que valen la pena. TED comenzó como una conferencia de cuatro días en California en 1984 y ha crecido para apoyar a aquellas ideas que intentan cambiar el mundo por medio de distintas iniciativas.
                    </p>
                    <p>
                        En los eventos TED, los principales pensadores y hacedores del mundo son invitados a dar la charla de su vida en 18 minutos o menos. Los oradores TED han incluido a Roger Ebert, Sheryl Sandberg, Bill Gates, Elizabeth Gilbert, Benoit Mandelbrot, Philippe Starck, Ngozi Okonjo-Iweala, Brian Greene, Isabel Allende entre muchos otros.
                    </p>
                    <p>
                        En TED.com, las charlas de los eventos TED son compartidas gratuitamente con todo el mundo. Cada día se publica una una nueva charla. Las charlas son subtituladas en muchos idiomas a través de una red global de voluntarios. Las charlas TED son compartidas a través de redes de distribución como TV, radio, Netflix y numerosos sitios web.
                    </p>
                    <p>
                        El programa TEDx otorga licencias gratuitas a gente en todo el mundo para organizar eventos del estilo de TED en comunidades locales con videos de charlas TED y con oradores en vivo. Algunas de estas charlas se suben también a TED.com.
                    </p>
                    <p>
                        El Premio TED, otorga anualmente un millón de dólares a individuos excepcionales con un deseo para cambiar el mundo. El programa de TED Fellows ayuda a innovadores que intentan cambiar el mundo a ser parte de la comunidad de TED y así amplificar el impacto de sus proyectos e iniciativas. TED-Ed crea videos cortos para educadores con la participación de maestros y expertos en animación, para el uso en las aulas.
                    </p>
                </div>
            </Page>
        );
    }
}

export default Ted;
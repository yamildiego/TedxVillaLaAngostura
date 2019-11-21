import React, { Component } from 'react';
import Page from './../Page';
import './Ted.css';

class Ted extends Component {
    render() {
        return (
            <Page title="¿Qué es TED?">
                <div className="Ted">
                    <p>TED es una organización sin fines de lucro dedicada a las <span className="font-italic">“ideas que vale la pena difundir”</span>. Comenzó como una conferencia en California en 1984 y se expandido notablemente para apoyar a aquellas ideas que intentan cambiar el mundo.</p>
                    <p>Las dos conferencias anuales de TED invitan a los pensadores y hacedores más importantes del mundo a dar la charla de su vida en no más de 18 minutos. Muchas de estas charlas están disponibles gratuitamente en TED.com. La conferencia TED se lleva a cabo en Vancouver, Canadá. En TED.com, las charlas de las conferencias son compartidas con el mundo gratuitamente en formato de videos. TED ha lanzado The Audacious Project que invita a financiar distintas ideas con el potencial de generar cambios a gran escala.</p>
                    <p>Pueden seguir a TED en Twitter en <a href="https://twitter.com/TEDTalks" target="_black">twitter.com/TEDTalks</a>, en Facebook en <a href="https://www.facebook.com/TED" target="_black">www.facebook.com/TED</a> o en Instagram en <a href="https://instagram.com/TED" target="_black">instagram.com/TED</a>.</p>
                </div>
            </Page>
        );
    }
}

export default Ted;
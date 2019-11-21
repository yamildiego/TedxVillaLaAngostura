import React, { Component } from 'react';
import Page from './../Page';
import './Ted.css';

class TedX extends Component {
    render() {
        return (
            <Page title="¿Qué es TEDx?">
                <div className="Ted">
                    <p>En el espíritu de difundir ideas que valen la pena, TED ha creado un programa llamado <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_black">TEDx</a>, constituido por eventos locales, organizados de forma independiente que reúnen a una audiencia para compartir una experiencia similar a TED.</p>
                    <p>Nuestro evento se denomina TEDxVillaLaAngostura, en el cual x significa “evento TED organizado en forma independiente”. Se trata de un evento sin fines de lucro dedicado a difundir ideas transformadoras e inspirar al público asistente, a través de charlas que abordan una diversidad de temáticas. En nuestro evento TEDxVillaLaAngostura, charlas TED en pregrabadas y oradores en vivo se combinarán para promover discusiones profundas y alentar vínculos entre el auditorio.</p>
                    <p>La edición 2019 constituye la primera vez en la cual se realiza un evento TEDx en VillaLaAngostura, y la segunda en la provincia del Neuquén.</p>
                </div>
            </Page>
        );
    }
}

export default TedX;
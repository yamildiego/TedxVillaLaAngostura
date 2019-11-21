import React, { Component } from 'react';
import Page from '../Page';
import './Press.css';

class Press extends Component {
    render() {
        return (
            <Page title="Prensa">
                <div className="Press">
                    <p>
                        <a rel="noopener noreferrer" href="https://www.diario7lagos.com.ar/llega-por-primera-vez-el-evento-tedxvillalaangostura/" target="_blank">
                            Diario7lagos - Nota
                        </a>
                    </p>
                    <p>
                        <a rel="noopener noreferrer" href="https://www.anbariloche.com.ar/noticias/2019/11/12/72103-las-charlas-ted-vuelven-a-la-region-para-compartir-ideas-que-inspiran" target="_blank">
                            ANB anbariloche.com.ar - Nota
                        </a>
                    </p>
                    <p>
                        <a rel="noopener noreferrer" href="https://www.facebook.com/angosturadigital/videos/2609760122441566/" target="_blank">
                            La Angostura Digital - Entrevista
                        </a>
                    </p>
                </div>
            </Page>
        );
    }
}

export default Press;
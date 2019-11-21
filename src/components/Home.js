import React, { Component } from 'react';
import { connect } from 'react-redux';
// import HomeSlide from './HomeSlide';
// import OurServices from './OurServices';
// import Section from './Section';
// import ModalContainer from './ModalContainer';
// import Modal from './Modal';
// import ViewProduct from './ViewProduct';
import Page from './../pages/Page';
import Main from './Main/Main';
import { Zoom } from 'react-slideshow-image';

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
}

class Home extends Component {
    render() {
        return (
            <Page container={false}>
                <div className="slide-container">
                    <Zoom {...zoomOutProperties}>
                        {
                            this.props.images.map((item) => <img key={item.id} style={{ width: "100%", height: "30vw", objectFit: "cover" }} src={item.image} alt="" />)
                        }
                    </Zoom>
                </div>
                <Main />
                <div className="container mt-2">
                    <h2>¿QUÉ ES TEDxVILLALAANGOSTURA?</h2>
                    <p>
                        La edición 2019 constituye la primera vez en la cual se realiza un evento TEDx en VillaLaAngostura, y la segunda en la provincia del Neuquén.
                   </p>
                    <p>
                        Nuestro evento se denomina <span className="font-weight-bolder">TEDxVillaLaAngostura</span>, en el cual x significa <span className="font-italic">“evento TED organizado en forma independiente”</span>. Se trata de un evento sin fines de lucro dedicado a difundir ideas transformadoras e inspirar al público asistente, a través de charlas que abordan una diversidad de temáticas. En TEDxVillaLaAngostura, charlas TED y TEDx pregrabadas y oradores en vivo se combinarán para promover discusiones profundas y alentar vínculos entre el auditorio.
                   </p>
                    <p>
                        El tema de este año es <span className="font-weight-bolder font-italic">“Pensando el futuro”</span>, y ese es nuestro compromiso: motivar a quienes asistan al evento e inspirarlos para transformar positivamente la realidad.
                    </p>
                </div>
            </Page>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        images: state.info[state.locale.lang].imageHome
    }
}

export default connect(mapStateToProps)(Home);
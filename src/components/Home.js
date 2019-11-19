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
import Image1 from './../assets/images/1.png';
import Image2 from './../assets/images/2.jpg';
import Image3 from './../assets/images/3.jpg';

const images = [
    Image1,
    Image2,
    Image3
];

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
            <Page>
                <Main />
                <div className="slide-container">
                    <Zoom {...zoomOutProperties}>
                        {
                            images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                        }
                    </Zoom>
                </div>
                <div>cascada</div>
                <div>dasdms dad asd
                    sdasdas
                    <p>dasdas</p>
                    <p>dasdas</p>
                    <p>dasdas</p>
                    <p>dasdas</p>
                    <p>dasdas</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio nihil sunt dolorum tempore. Laborum fugit ex debitis tempore. Fuga deleniti illum harum odit voluptates quod dolorem temporibus necessitatibus saepe!</p>
                </div>
            </Page>
        );
    }
}

function mapStateToProps(state, props) {
    return {
    }
}

export default connect(mapStateToProps)(Home);
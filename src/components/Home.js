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

class Home extends Component {
    render() {
        return (
            <Page>
                <Main />
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
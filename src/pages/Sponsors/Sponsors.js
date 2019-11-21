import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../Page';
import { Image, Container, Row, Col } from 'react-bootstrap';
import './Sponsors.css';

class Sponsors extends Component {
    render() {
        return (
            <Page title="Sponsors">
                <div className="Sponsors container" >
                    <Container>
                        <Row>
                            {
                                this.props.sponsors.map((item) => {
                                    return (
                                        <Col key={item.id} md={4} className="text-center" style={{ marginBottom: "12px" }}>
                                            <Image src={item.image} fluid style={{ maxHeight: "150px", maxWidth: "220px" }} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>
            </Page>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        sponsors: state.info[state.locale.lang].sponsors
    }
}

export default connect(mapStateToProps)(Sponsors);
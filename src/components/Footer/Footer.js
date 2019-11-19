import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import SocialMedia from './../SocialMedia/SocialMedia';
import './Footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="Footer">
                <div className="FooterCopyright">
                    <div className="container">
                        <SocialMedia />
                        <div className="text-center">
                            <FormattedMessage locale={this.props.lang} id="footer.copyright" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(Footer);
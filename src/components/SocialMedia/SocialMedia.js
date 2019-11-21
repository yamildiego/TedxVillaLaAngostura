import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Constants from './../../config';
import './SocialMedia.css';

const SocialMedia = (props) => {
    return (
        <div className={"SocialMedia " + props.className}>
            <div className="d-flex flex-row justify-content-center">
                <div className="p-2">
                    <a href={"https://www.facebook.com/" + Constants.fb} title="Facebook" target="_blank" rel="noopener noreferrer">
                        <div className="SocialMediaBtnLink SocialMediaF">
                            <FontAwesomeIcon color="white" icon={['fab', 'facebook-f']} />
                        </div>
                    </a>
                </div>
                <div className="p-2">
                    <a href={"https://www.twitter.com/" + Constants.twitter} title="Twitter" rel="noopener noreferrer" target="_blank">
                        <div className="SocialMediaBtnLink SocialMediaT">
                            <FontAwesomeIcon color="white" icon={['fab', 'twitter']} />
                        </div>
                    </a>
                </div>
                <div className="p-2">
                    <a href={"https://www.instagram.com/" + Constants.instagram} title="Instagram" target="_blank" rel="noopener noreferrer">
                        <div className="SocialMediaBtnLink SocialMediaI">
                            <FontAwesomeIcon color="white" icon={['fab', 'instagram']} />
                        </div>
                    </a>
                </div>
                <div className="p-2">
                    <a href={"https://www.youtube.com/channel/" + Constants.youtube} title="Youtube" target="_blank" rel="noopener noreferrer">
                        <div className="SocialMediaBtnLink SocialMediaI">
                            <FontAwesomeIcon color="white" icon={['fab', 'youtube']} />
                        </div>
                    </a>
                </div>
                <div className="p-2">
                    <a href={"https://www.flickr.com/photos/" + Constants.flickr} title="Flickr" target="_blank" rel="noopener noreferrer">
                        <div className="SocialMediaBtnLink SocialMediaI">
                            <FontAwesomeIcon color="white" icon={['fab', 'flickr']} />
                        </div>
                    </a>
                </div>
                <div className="p-2">
                    <a href={"mailto:" + Constants.emailWebsite} title="Email" target="_blank" rel="noopener noreferrer">
                        <div className="SocialMediaBtnLink SocialMediaI">
                            <FontAwesomeIcon color="white" icon={['fas', 'at']} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;
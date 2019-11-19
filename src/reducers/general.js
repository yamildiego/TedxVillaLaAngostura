import { MODAL_SPEAKER_SET, SPEAKER_SET } from './types';

let init = {
    modalSpeaker: false,
    speakerSelected: null
}

export default function general(state = init, action = {}) {
    switch (action.type) {
        case MODAL_SPEAKER_SET:
            return { ...state, modalSpeaker: action.modalSpeaker };
        case SPEAKER_SET:
            return { ...state, speakerSelected: action.speakerSelected };
        default:
            return state;
    }
}
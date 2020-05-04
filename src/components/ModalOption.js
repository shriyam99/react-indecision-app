import React from 'react';
import Modal from 'react-modal';

const ModalOption = (props)=>{
    return (
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeModal}
        closeTimeoutMS={200}
        className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.closeModal}>Close</button>
        </Modal>
    );
}

export default ModalOption;

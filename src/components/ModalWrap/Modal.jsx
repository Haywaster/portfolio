import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Carousel from '../Carousel';

const Modal = ({ card }) => {
    return (
        <>
            <Carousel {...card} />
            <div className='info-box'>
                <div className="title">{card.name}</div>
                <div className="tag">{card.brief.toUpperCase()}</div>
                <div className="detail">{card.descr}</div>
                <Button content='open-in-new' text='View code' action={() => window.open(card.url, "_blank")} />
            </div>
        </>
    );
};

Modal.propTypes = {
    card: PropTypes.object,
}

export default Modal;
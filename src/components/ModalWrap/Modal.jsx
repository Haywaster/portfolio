import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Carousel from '../Carousel';

const Modal = ({ activeCard }) => {
    const { name, filter, images, brief, descr, url } = activeCard;
    const urlArr = images.map(el => `/img/filling/${filter.toLowerCase()}/${name}/${el}`);

    return (
        <>
            <Carousel urlArr={urlArr} />
            <div className='info-box'>
                <div className="title">{name}</div>
                <div className="tag">{brief}</div>
                <div className="detail">{descr}</div>
                <Button content='open-in-new' text='View code' action={() => window.open(url, "_blank")} />
            </div>
        </>
    );
};

Modal.propTypes = {
    activeCard: PropTypes.object,
    name: PropTypes.string,
    filter: PropTypes.string,
    images: PropTypes.array,
    brief: PropTypes.string,
    descr: PropTypes.string,
    url: PropTypes.string,
}

export default memo(Modal);
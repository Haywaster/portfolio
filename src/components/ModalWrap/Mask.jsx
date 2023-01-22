import React from 'react';
import Button from '../Button/Button';
import { Carousel } from '../Carousel/Carousel';

const Mask = ({ card }) => {
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

export default Mask;
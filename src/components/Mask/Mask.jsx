import React from 'react';
import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import './Mask.css'

import Button from '../Button/Button';
import { Carousel } from '../Carousel/Carousel';

const Mask = ({ card, modal, onClose }) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };
        if (modal) {
            document.body.classList.add('modal-body')
        }
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            document.body.classList.remove('modal-body')
        };
    }, [onClose, modal])

    return (
        <AnimatePresence initial={false}>
            {modal && (
                <div className="modal-wrap flex">
                    <motion.div className='mask'
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <motion.div
                            ref={ref}
                            className='modal'
                            initial={{ scale: 0.7 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.7 }}
                            transition={{ duration: 0.3 }}>
                            <Carousel {...card} />
                            <div className='info-box'>
                                <div className="title">{card.name}</div>
                                <div className="tag">{card.brief.toUpperCase()}</div>
                                <div className="detail">{card.descr}</div>
                                <Button content='open-in-new' text='View code' action={() => window.open(card.url, "_blank")} />
                                <Icon onClick={onClose} className='mdi mdi-close' icon='mdi:close' />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Mask;
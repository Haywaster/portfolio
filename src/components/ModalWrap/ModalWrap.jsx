import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import './ModalWrap.css';

const ModalWrap = ({ modal, success, error, onClose, children, }) => {
    const [scroll, setScroll] = useState(0)
    const ref = useRef(null);

    const countScroll = () => {
        let div = document.createElement('div')
        div.style.overflowY = 'scroll';
        document.body.appendChild(div);
        setScroll(div.offsetWidth - div.clientWidth);
        div.remove();
    }

    useEffect(() => {
        countScroll();

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            };
        };
        if (modal || success || error) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scroll}px`;
        };

        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            document.body.style.overflowY = 'scroll';
            document.body.style.paddingRight = `${0}px`;
        };
    }, [onClose, modal, success, error]);

    return (
        <AnimatePresence initial={false}>
            {success || error || modal ? (
                <motion.div className="modal-wrap flex">
                    <motion.div className='mask'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        key={modal}
                        className={success || error ? 'modal notification' : 'modal'}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        {children}
                        <Icon onClick={onClose} className='mdi mdi-close' icon='mdi:close' />
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default ModalWrap;
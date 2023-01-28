import React, { useRef, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import './ModalWrap.css';

let scrollCount = 0;

const countScroll = () => {
    const div = document.createElement('div');
    div.style.overflowY = 'scroll';
    document.body.appendChild(div);
    scrollCount = div.offsetWidth - div.clientWidth;
    div.remove();
}


const ModalWrap = ({ modal, success, error, onClose, children, }) => {
    const ref = useRef(null);

    useEffect(() => {
        countScroll();

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };
        if (modal || success || error) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollCount}px`;
        }

        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            document.body.style.overflowY = 'scroll';
            document.body.style.paddingRight = 0;
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

ModalWrap.propTypes = {
    modal: PropTypes.string,
    success: PropTypes.bool,
    error: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.array.isRequired,
};

export default memo(ModalWrap);
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import './Carousel.css'

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data.js";

const variants = {
    enter: direction => {
        return {
            x: direction > 0 ? 700 : -700,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
    },
    exit: direction => {
        return {
            zIndex: 0,
            x: direction < 0 ? 700 : -700,
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export const Carousel = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="carousel">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    className="slider-img"
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: "tween" } }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <Icon onClick={() => paginate(1)} className='next mdi mdi-chevron-right' icon='mdi:chevron-right' />
            <Icon onClick={() => paginate(-1)} className='prev mdi mdi-chevron-left' icon='mdi:chevron-left' />
        </div>
    );
};

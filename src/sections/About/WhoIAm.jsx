import React from "react";
import { Link } from "react-scroll";
import PropTypes from 'prop-types';

const WhoIAm = ({ direction }) => {
    return (
        <div data-aos={`fade-${direction}`} data-aos-duration="1000" className="flex flex-50-gt-sm">
            <img src='/img/me.webp' className="me" alt="I'm" />
            <div className="label bold">Who&apos;s this guy?</div>
            <div>
                I&apos; m a Front-End Developer in Tomsk, Russia.
                <br />
                I have serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences.
                <br />
                <Link to='contact' smooth={true}>
                    <span className="highlight">Let&apos;s make something special.</span>
                </Link>
            </div>
        </div>
    );
};

WhoIAm.propTypes = {
    direction: PropTypes.string,
};

export default WhoIAm;
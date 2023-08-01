import React from 'react';

import Qualities from '../Qualities/Qualities';
import WhoIAm from '../WhoIAm/WhoIAm';
import Skills from '../Skills/Skills';

import styles from '../styles.module.css';

const About = () => {
  return (
    <>
      <Qualities />
      <div className={styles.SkillsWrapper}>
        <WhoIAm direction='right' />
        <Skills />
      </div>
    </>
  );
};

export default About;

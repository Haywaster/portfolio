import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

const QualitiesItem = ({ picture, header, descr, num }) => {
  return (
    <div className={styles.BulletWrap}>
      <div data-aos='flip-right' data-aos-delay={num * 100} className={styles.HexWrap}>
        <div className={styles.Hexagon}>
          <Icon className={`mdi mdi-${picture}`} icon={`mdi:${picture}`} />
        </div>
      </div>
      <div data-aos='fade' data-aos-delay={num * 100}>
        <div className={styles.Label}>{header}</div>
        <div>{descr}</div>
      </div>
    </div>
  );
};

QualitiesItem.propTypes = {
  picture: PropTypes.string,
  header: PropTypes.string,
  descr: PropTypes.string,
  num: PropTypes.number
};

export default QualitiesItem;

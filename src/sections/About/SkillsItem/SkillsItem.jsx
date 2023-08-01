import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.module.css';

const SkillsItem = ({ header, width, fillMax }) => {
  const [fillItem, setFillItem] = useState(0);

  useEffect(() => {
    if (width >= fillMax) {
      setFillItem(fillMax);
    }
    return;
  }, [fillMax, width]);

  return (
    <div className={styles.Bar}>
      <div className={styles.Fill} style={{ width: `${fillItem}%` }}>
        <div className={styles.Tag}>{header}</div>
      </div>
      <span>{fillItem}%</span>
    </div>
  );
};

SkillsItem.propTypes = {
  header: PropTypes.string,
  width: PropTypes.number,
  fillMax: PropTypes.number
};

export default SkillsItem;

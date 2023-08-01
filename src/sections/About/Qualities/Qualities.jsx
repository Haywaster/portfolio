import React from 'react';

import QualitiesItem from '../QualitiesItem/QualitiesItem';
import QualitiesData from '../../../data/Qualities.json';

import styles from '../styles.module.css';

const renderQualities = array => {
  const newArray = array
    .map((elem, i) => {
      return (
        <QualitiesItem
          key={elem.header}
          num={i + 1}
          picture={elem.picture}
          header={elem.header}
          descr={elem.descr}
        />
      );
    })
    .reduce((acc, c, i) => {
      if (i % 2 === 0) acc.push([]);
      acc[acc.length - 1].push(c);
      return acc;
    }, []);

  return newArray.map((arrayGroup, i) => {
    return (
      <div key={i} className={styles.Couple}>
        {arrayGroup}
      </div>
    );
  });
};

const elements = renderQualities(QualitiesData);

const Qualities = () => {
  return <div className={styles.Qualities}>{elements}</div>;
};

export default Qualities;

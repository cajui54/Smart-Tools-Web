import React from 'react';
import styles from './styles.module.scss';

import { IconType } from 'react-icons';

interface PropsTitle {
  svg: IconType;
  title: string;
  subtitle: string;
}
const TitlesComponent = ({ svg: Icon, title, subtitle }: PropsTitle) => {
  return (
    <div className={styles.containerTitles}>
      <Icon />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default TitlesComponent;

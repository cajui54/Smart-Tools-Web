import React from 'react';
import styles from './styles.module.scss';

import { IconType } from 'react-icons';

export interface PropsTitle {
  svg: IconType;
  title: string;
  subtitle: string;
  description: string;
}
const TitlesComponent = ({
  svg: Icon,
  title,
  subtitle,
  description,
}: PropsTitle) => {
  return (
    <div className={styles.containerTitles}>
      <div>
        <h1>
          <span>{title} </span>
          <Icon />
          <span>{subtitle}</span>
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TitlesComponent;

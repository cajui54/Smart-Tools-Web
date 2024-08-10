import React from 'react';
import styles from '../app/page.module.scss';
import { AiOutlineLoading } from 'react-icons/ai';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <AiOutlineLoading />

      <span>Loading...</span>
    </div>
  );
};

export default Loading;

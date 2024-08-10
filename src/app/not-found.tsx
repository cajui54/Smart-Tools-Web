import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';
import { PiGlobeSimpleX } from 'react-icons/pi';
import { TfiBackLeft } from 'react-icons/tfi';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <span>
        <PiGlobeSimpleX />
      </span>

      <h2>Error 404 - Not Found</h2>
      <Link href="/">
        <TfiBackLeft />
        Back
      </Link>
    </div>
  );
};

export default NotFound;

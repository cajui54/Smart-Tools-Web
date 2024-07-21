import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import styles from './styles.module.scss';
const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <h2>Smart Tools Web</h2>
      <div>
        <Link href="https://www.linkedin.com/feed/" target="_blank">
          <FaLinkedin />
        </Link>

        <Link
          href="https://english-pocket-jkswebsites.vercel.app/"
          target="_blank"
        >
          <LiaFlagUsaSolid />
        </Link>

        <Link
          href="https://guia-online-de-empregos.vercel.app/"
          target="_blank"
        >
          <span>Guia Online</span>
          <span>De Empregos</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

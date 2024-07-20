import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import imgLogo from '../../assets/images/logo.png';
import styles from '../header/styles.module.scss';
import ButtonBuger from './_components/Button_Burger';
import Navbar from './_components/navbar';

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <Link href="/" className={styles.containerLogo}>
        <Image src={imgLogo} alt="Logo JKS Websites" />
      </Link>
      <Navbar />
      <ButtonBuger />
    </header>
  );
};

export default Header;

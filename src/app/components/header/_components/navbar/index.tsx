'use client';
import React from 'react';
import styles from './styles.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu } from '@/redux/slices/menu/sliceMenu';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const navLink = [
    { href: '/', title: 'Convertor de Textos' },
    { href: '/tools/smart-buy', title: 'Compra Inteligênte' },
  ];
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menu);
  const pathName = usePathname();

  const handleClick = () => {
    dispatch(openMenu());
  };
  return (
    <nav
      className={`${menu.classNavbar} ${styles.mainNavbar}`}
      aria-label="navbar"
    >
      {navLink.length > 0 &&
        navLink.map((link, index) => {
          const isActive = pathName === link.href;
          return (
            <Link
              href={link.href}
              key={index}
              onClick={handleClick}
              className={isActive ? 'isActive' : ''}
            >
              <span>
                {link.title}
                <div></div>
              </span>
            </Link>
          );
        })}
    </nav>
  );
};

export default Navbar;

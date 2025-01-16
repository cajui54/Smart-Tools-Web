import React from 'react';
import styles from './style.module.scss';

interface IProps {
  message: string;
}
const ErrorMessage = ({ message }: IProps) => {
  return <div className={styles.errorMessage}>{message}</div>;
};

export default ErrorMessage;

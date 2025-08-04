import React from 'react';
import styles from '../styles/App.module.css';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

const Button: React.FC<Props> = ({ children, onClick, type = 'button' }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;
import React from 'react';
import styles from '../styles/App.module.css';

type Props = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
};

const InputField: React.FC<Props> = ({ name, placeholder, value, onChange, isTextarea = false }) => {
  if (isTextarea) {
    return <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} className={styles.formInput} />;
  }
  return <input name={name} placeholder={placeholder} value={value} onChange={onChange} className={styles.formInput} />;
};

export default InputField;
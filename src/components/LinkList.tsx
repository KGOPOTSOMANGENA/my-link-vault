import React from 'react';
import type { Link } from '../types/Link';
import LinkItem from './LinkItem';
import styles from '../styles/App.module.css';

type Props = {
  links: Link[];
  onEdit: (link: Link) => void;
  onDelete: (id: string) => void;
};

const LinkList: React.FC<Props> = ({ links, onEdit, onDelete }) => (
  <div className={styles.grid}>
    {links.map(link => (
      <LinkItem key={link.id} link={link} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </div>
);

export default LinkList;
import React from 'react';
import type { Link } from '../types/Link';
import TagList from './TagList';
import Button from './Button';
import styles from '../styles/App.module.css';

type LinkItemProps = {
  link: Link;
  onEdit: (link: Link) => void;
  onDelete: (id: string) => void;
};

const LinkItem: React.FC<LinkItemProps> = ({ link, onEdit, onDelete }) => (
  <div className={styles.card}>
    <h3>{link.title}</h3>
    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
    <p>{link.description}</p>
    <TagList tags={link.tags} />
    <div>
      <Button onClick={() => onEdit(link)}>Edit</Button>
      <Button onClick={() => onDelete(link.id)}>Delete</Button>
    </div>
  </div>
);

export default LinkItem;
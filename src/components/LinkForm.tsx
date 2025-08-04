import React, { useState, useEffect } from 'react';
import type { Link } from '../types/Link';
import InputField from './InputField';
import Button from './Button';
import styles from '../styles/App.module.css';

type Props = {
  onSave: (link: Link) => void;
  editingLink?: Link | null;
  onCancelEdit: () => void;
};

const LinkForm: React.FC<Props> = ({ onSave, editingLink, onCancelEdit }) => {
  const [link, setLink] = useState<Link>({
    id: '',
    title: '',
    url: '',
    description: '',
    tags: [],
  });

  useEffect(() => {
    if (editingLink) setLink(editingLink);
  }, [editingLink]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'tags') {
   
      const tagsArray = value.split(',').map(tag => tag.trim()).filter(Boolean);
      setLink({ ...link, tags: tagsArray });
    } else {
      setLink({ ...link, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!link.url.trim() || !link.title.trim()) return;

    onSave({
      ...link,
      id: editingLink ? link.id : Date.now().toString(),
    });

    setLink({ id: '', title: '', url: '', description: '', tags: [] });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        name="title"
        placeholder="Title"
        value={link.title}
        onChange={handleChange}
      />
      <InputField
        name="url"
        placeholder="URL"
        value={link.url}
        onChange={handleChange}
      />
      <InputField
        name="description"
        placeholder="Description"
        value={link.description}
        onChange={handleChange}
        isTextarea
      />
      <InputField
        name="tags"
        placeholder="Tags (comma-separated)"
        value={link.tags.join(', ')} 
        onChange={handleChange}
      />
      <div className={styles.formButtons}>
        <Button type="submit">{editingLink ? 'Update' : 'Save'}</Button>
        {editingLink && <Button onClick={onCancelEdit}>Cancel</Button>}
      </div>
    </form>
  );
};

export default LinkForm;
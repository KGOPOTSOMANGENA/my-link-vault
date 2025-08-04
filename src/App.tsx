import React, { useState, useEffect } from 'react';
import type { Link } from './types/Link';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import SearchBar from './components/SearchBar';
import styles from './styles/App.module.css';

const App: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const [editingLink, setEditingLink] = useState<Link | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('links');
    if (saved) setLinks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  const saveLink = (link: Link) => {
    if (editingLink) {
      setLinks(prev => prev.map(l => (l.id === link.id ? link : l)));
      setEditingLink(null);
    } else {
      setLinks(prev => [...prev, link]);
    }
  };

  const deleteLink = (id: string) => {
    setLinks(prev => prev.filter(l => l.id !== id));
  };

  const filteredLinks = links.filter(l =>
    l.title.toLowerCase().includes(query.toLowerCase()) ||
    l.url.toLowerCase().includes(query.toLowerCase()) ||
    l.description.toLowerCase().includes(query.toLowerCase()) ||
    l.tags.join(',').toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Links Vault</h1>
      <LinkForm onSave={saveLink} editingLink={editingLink} onCancelEdit={() => setEditingLink(null)} />
      <SearchBar query={query} setQuery={setQuery} />
      <LinkList links={filteredLinks} onEdit={setEditingLink} onDelete={deleteLink} />
    </div>
  );
};

export default App;


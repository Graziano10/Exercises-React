import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGithubUser from '../hooks/useGithubUser';

const GithubUserList = () => {
  const [username, setUsername] = useState('');
  const { user, isLoading, isError } = useGithubUser(username);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Lista Utenti GitHub</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button type="submit">Seleziona</button>
      </form>
      {isLoading ? (
        <p>Caricamento...</p>
      ) : isError ? (
        <p>Errore durante il recupero dei dati.</p>
      ) : user ? (
        <div>
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <p>Numero di follower: {user.followers}</p>
          <p>Numero di repository pubblici: {user.public_repos}</p>
          <p>
            <Link to={`/users/${username}`}>Vedi dettagli</Link>
          </p>
        </div>
      ) : (
        <p>Aggiungi un nome utente per visualizzare i dettagli.</p>
      )}
    </div>
  );
}

export default GithubUserList;
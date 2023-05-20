import React from 'react';
import { useParams } from 'react-router-dom';
import useGithubUser from '../hooks/useGithubUser';

const ShowGithubUser = () => {
  const { username } = useParams();
  const { user, isLoading, isError } = useGithubUser(username);

  if (isLoading) {
    return <p>Caricamento...</p>;
  }

  if (isError) {
    return <p>Errore durante il recupero dei dati.</p>;
  }

  if (user) {
    return (
      <div>
        <h2>Dettagli Utente GitHub: {username}</h2>
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
        <p>Numero di follower: {user.followers}</p>
        <p>Numero di repository pubblici: {user.public_repos}</p>
      </div>
    );
  }

  return <p>Nessun utente trovato.</p>;
}

export default ShowGithubUser;
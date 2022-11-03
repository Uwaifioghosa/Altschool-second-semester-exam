import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Repos = () => {
  const [repos, setRepos] = useState([]);

  const url = 'https://api.github.com/users/shokes/repos';

  const getRepos = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setRepos(data);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <section className='container'>
      <h2 className='heading'>Repositories</h2>

      <div>
        <ul className='repos'>
          {repos.map((repo) => {
            const { name, id, description, language } = repo;
            return (
              <Link key={id} className='repo' to={`/${name}`}>
                <h2 className='name'> {name}</h2>
                <p className='description'>
                  {description || 'No description available at the moment'}
                </p>
                <span>{language}</span>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Repos;

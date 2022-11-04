import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = 'https://api.github.com/users/shokes/repos';

  const getRepos = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setLoading(false);
    setRepos(data);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <head>
        <title>Github Portfolio</title>
        <meta
          name='description'
          content='Github repositories of Github User, Oshoke Oyati'
        />
        <meta property='og:title' content='Github Portfolio' />
        <meta
          property='og:description'
          content='Github repositories of Github User, Oshoke Oyati.'
        />

        {/* change after deploument */}
        <meta property='og:url' content='https://oshoke.vercel.app/' />
        <meta property='og:type' content='website' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      </head>

      <section className='container'>
        <head>
          <title>Github Portfolio</title>
          <meta
            name='description'
            content='Github repositories of Github User, Oshoke Oyati'
          />
          <meta property='og:title' content='Github Portfolio' />
          <meta
            property='og:description'
            content='Github repositories of Github User, Oshoke Oyati.'
          />

          {/* change after deploument */}
          <meta property='og:url' content='https://oshoke.vercel.app/' />
          <meta property='og:type' content='website' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        </head>

        <h2 className='heading'>Repositories</h2>

        <div>
          {loading ? (
            <Loading />
          ) : (
            <div className='repos'>
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
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Repos;

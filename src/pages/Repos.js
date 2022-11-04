import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorBoundary from '../components/ErrorBoundary';
import OurFallbackComponent from '../components/FallBack';

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

        <meta
          property='og:url'
          content='https://g-ithub-user-examination.vercel.app/'
        />
        <meta property='og:type' content='website' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
      </head>
      <ErrorBoundary FallbackComponent={OurFallbackComponent}>
        <section className='container'>
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
                        {description ||
                          'No description available at the moment'}
                      </p>
                      <span>{language}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </ErrorBoundary>
    </>
  );
};

export default Repos;

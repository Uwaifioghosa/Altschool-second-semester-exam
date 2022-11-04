import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ErrorBoundary from '../components/ErrorBoundary';
import OurFallbackComponent from '../components/FallBack';

const SingleRepo = () => {
  const { name } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `https://api.github.com/repos/shokes/${name}`;

  const getSingleRepo = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setRepo(data);
  };

  useEffect(() => {
    getSingleRepo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  if (repo) {
    const {
      description,

      default_branch: branch,
      stargazers_count: stars,
      visibility,
      language,
      html_url: url,
    } = repo;

    return (
      <>
        <head>
          <title>{name}</title>
          <meta name='description' content={`${name}`} />
          <meta property='og:title' content={`${name}`} />
          <meta property='og:description' content={`${name}`} />

          <meta
            property='og:url'
            content={`https://g-ithub-user-examination.vercel.app/${name}`}
          />
          <meta property='og:type' content='website' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
        </head>
        <ErrorBoundary FallbackComponent={OurFallbackComponent}>
          <section className='container'>
            <Link to='/' className='back'>
              <span>back to repos</span>
            </Link>

            {loading ? (
              <Loading />
            ) : (
              <div className='single-repo'>
                <h2 className='single-name'>{name}</h2>
                <p className='single-desc'>
                  {description || 'description not available'}
                </p>
                <div>
                  <span>Stars: {stars}</span>
                </div>
                <div>
                  <span className='cap'>Visibility: {visibility}</span>
                </div>
                <div>
                  <span className='cap'>
                    Code:{' '}
                    <a
                      href={url}
                      className='url'
                      target='_blank'
                      rel='noreferrer'
                    >
                      github
                    </a>
                  </span>
                </div>
                <div>
                  <span className='cap'>
                    Main language: {language || 'not available'}
                  </span>
                </div>
                <div>
                  <span className='cap'>Branch: {branch}</span>
                </div>
              </div>
            )}
          </section>
        </ErrorBoundary>
      </>
    );
  } else {
    return;
  }
};

export default SingleRepo;

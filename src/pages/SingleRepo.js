import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleRepo = () => {
  const { name } = useParams();
  const [repo, setRepo] = useState(null);
  console.log(repo);

  const url = `https://api.github.com/repos/shokes/${name}`;

  const getSingleRepo = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setRepo(data);
  };

  useEffect(() => {
    getSingleRepo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  if (repo) {
    const { description, topics } = repo;

    return (
      <section className='container'>
        <Link to='/' className='back'>
          <span>back to repos</span>
        </Link>

        <div className='single-repo'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </section>
    );
  } else {
    return;
  }
};

export default SingleRepo;

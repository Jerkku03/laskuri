import useSWR from 'swr';

// Import useSWR from swr package

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: Resources,
    error,
    isValidating,
  } = useSWR('https://co2data.fi/api/co2data_construction.json', fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div>
      {Resources &&
        Resources.map((name) => (
          <p>{name}</p>
        ))}
    </div>
  );
};

export default Swr;
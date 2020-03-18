import {useState, useEffect} from 'react';

export default function getDataFrom(url) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    console.log('Mounting or updating');
    async function fetchData() {
      setLoading(true);
      setError();
      setStats();
      console.log('Fetching Data from ' + url);
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          console.log('api call error--->>>');
          setError(err);
        });
      if (data['error'] != null) {
        setError(data.error.message);
      } else {
        setStats(data);
      }
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error,
  };
}

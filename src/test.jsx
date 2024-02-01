import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('hello');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
        <p>test!</p>

      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default MyComponent;

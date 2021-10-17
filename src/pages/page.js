import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';

const getData = async () => {
  // Watch for json = npx json-server -p 3500 -w db.json
  return await axios
    .get('./db.json') // 'http://localhost:3500/'
    .then((response) => {
      const results = response.data;
      console.log(results);
      return results.buttons;
    })
    .catch((err) => {
      console.error(err);
    });
};

export default function Page() {
  const [buttons, setButtons] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getData().then((apiButtons) => {
      setButtons(apiButtons);
    });
  }, []);


  return (
    <div>
      <h2> Smart Button </h2>
      <ul>
          {buttons.map((item, index) => (
            <>
              <p> {item.text} Button Clicked: {counter} </p>
              <button key={index} onClick={() => setCounter((prev) => prev + 1)}>
                {item.text}
              </button>
            </>
          ))}
        </ul>
    </div>
  );
}

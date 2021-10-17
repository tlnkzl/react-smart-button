import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SmartButton from '../components/SmartButton';

const getData = async () => {
  return await axios
    .get('./db.json')
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
  const [status, setStatus] = useState('');

  useEffect(() => {
    getData().then((apiButtons) => {
      setButtons(apiButtons);
    });
  }, []);

  async function smartButtonPressed(item) {
    let counter = item.counter ? ++item.counter : 1;
    item.counter = counter;
    let arr = buttons;
    setButtons(arr);
    setStatus(`${item.label} click counter : ${counter}`);
  }

  return (
    <div>
      <h2> Smart Button </h2>
      {buttons.map((item, index) => (
        <SmartButton key={index} onPress={() => { smartButtonPressed(item)}} data={item} />
      ))}
      <h3>{status}</h3>
    </div>
  );
}

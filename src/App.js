import React, { useEffect, useState } from "react";
import axios from "axios";
import convertArray from "./convertArray";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/photos");
      const photo = result?.data;
      photo?.forEach((item) => {
        item.albumId = item.id;
      });
      setData(photo);
    };

    fetchData();
  }, []);

  const onChange = (v) => {
    setValue(v);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setResult(convertArray(value));
  };

  return (
    <div className="App">
      <form onSubmit={(e) => onSubmit(e)}>
        <input value={value} onChange={(e) => onChange(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      <div>
        Result: <b>{JSON.stringify(result)}</b>
      </div>
      {data?.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
};

export default App;

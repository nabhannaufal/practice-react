import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/photos");
      const photo = result?.data;
      photo?.forEach((item) => {
        item.albumId = item.id;
      });
      setData(photo);
      console.log(photo);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {data?.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
};

export default App;

import React,{useState} from 'react'

const Home = () => {
  const [name,setName] = useState("to todo app")

  

  return (
    <div>
      <h1>Welcome{name}</h1>
      <button onClick={() => setName("")}>Reset</button>
    </div>
  );
};

export default Home;

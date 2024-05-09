import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Nohakhali" special="Division"></District>
      <District name="Bramonbaria" special="Danger"></District>
      <District name="Comilla" special="Moyna and moti"></District>

    </div>
  );
}
function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect ( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  },[])

  return(
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post 
          title={post.title}
          body={post.body}
        ></Post>)
      }
    </div>
  )
}
function Post(props){
  return(
    <div style={{backgroundColor:'lightblue'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}


function District(props){
  const [power, setPower] = useState(1);
  const bootsPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div className='district'>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={bootsPower}>Boots The Power</button>
    </div>

  )
}

export default App;

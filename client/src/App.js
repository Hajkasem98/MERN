import Axios from "axios"
import {useState, useEffect} from "react";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Badge, ListGroup, Form, Button} from 'react-bootstrap';

export default function App() {

  const api = "http://localhost:3001"

  // State variable to store the fetched users and inputs
  const [users, setUsers]=useState([])
  const [name, setName]=useState("")
  const [age, setAge]=useState("")
  const [email, setEmail]=useState("")

  // useEffect hook is used for side effects, like data fetching in this case

  useEffect(()=>{
      // Axios is used to make an HTTP GET request to the specified URL
    Axios.get(`${api}/users`)
    .then(res => setUsers(res.data))
  }, [users])  // The empty dependency array means this effect will run once when the component mounts

  const createUser = () => {
    if(name && age && email){
      Axios.post(`${api}/createUser`, {
      name : name,
      age : age, 
      email : email
    })
    .then(res => res.data)
    }
  }
    /*
      The empty tags (<> and </>) are shorthand for a React Fragment.
       In React, a Fragment is a way to group multiple elements without 
       adding an extra node to the DOM. Fragments do not create any additional 
       DOM elements, which is useful when you want to return multiple elements 
       from a component without introducing unnecessary parent elements. 
      <>
      {..........}
      </>

      <React.Fragment>
      {.........}
      </React.Fragment>

       */
  return (

  <Container>

    <form className="form mb-3">
      <Form.Control type="text" placeholder="Name" onChange={e=>setName(e.target.value)}></Form.Control>
      <Form.Control type="number" placeholder="Age" onChange={e=>setAge(e.target.value)}></Form.Control>
      <Form.Control type="text" placeholder="Email" onChange={e=>setEmail(e.target.value)}></Form.Control>
      <button className="btn btn-success" onClick={createUser}>Creat user</button>
    </form>

    <div className="result">

      {users.map(user =>{
      return(
      <ListGroup key={user._id}>
        <ListGroup.Item variant="dark" className="d-flex justify-content-between">
            <div>
              <div className="fw-bold">{user.name}</div>
              <div>{user.email}</div>
            </div>
          <Badge className="h-25" bg="success">{user.age}</Badge>

        </ListGroup.Item>
      </ListGroup>
      )
    })}
    </div>
  
  </Container>

  );
}



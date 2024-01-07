import React from "react";
import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button} from 'react-bootstrap';


const Auth = () => {
    return(
        <div>
            <Register />
            <Login />
        </div>
    )
}
// Register, Login, Form and Auth are components and should start with capital letter 
const Register = () => {   
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    return(
        <AutForm 
        label="Register" 
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
    />
    )
}
const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    return(
        <AutForm 
        label="Login" 
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
    />
    )
}
/*
Destructuring Props:
When you receive props in a functional component, you can destructure
 them directly in the function parameters. This makes it easier to access
  specific properties from the props object.

// Without destructuring
const MyComponent = (props) => {
  return <div>{props.name}</div>;
};

// With destructuring
const MyComponent = ({ name }) => {
  return <div>{name}</div>;
};
 */
const AutForm = ({label,username,setUsername,password,setPassword}) => {
    return(
        <Container>
            <Form className="form">
                <h2 className="text-white">{label}</h2>

                <Form.Control type="text" placeholder="Name" id="username" value={username} onChange={(e) => setUsername(e.target.value)}></Form.Control>
                <Form.Control type="text" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>


                <Button variant="success" type="submit">{label}</Button>
            </Form>
        </Container>
    
    )
}

export default Auth;
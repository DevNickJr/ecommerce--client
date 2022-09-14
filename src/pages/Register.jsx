import React from 'react'
import styled from 'styled-components'
import { categories } from "../data"
import { tablet } from '../responsive';

const Container = styled.div`
    padding: 1rem;
    display: flex; 
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background: url(${categories[1].img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    ${tablet("align-items: center;")}
`

const Title = styled.h1`
    margin-bottom: 2rem;
    font-size: 3rem;
    color: white;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
   
    gap: 0.5rem;
    ${tablet(" width: 40%;")}

`
const Input = styled.input`
    border: 2px solid #0000002e;
    outline: none;
    border-radius: 5px;
    padding: 1rem;
    color: white;
    background: ${props => props.type==="submit"? "#b9a260": ''};
    font-size: ${props => props.type==="submit"? "1.3rem": '0.9rem'};
    transition: all 0.1s ease-in;

    &:hover {
        background: ${props => props.type==="submit"? "#b9a260cc": ''};
        cursor: pointer;
    }
    &:active {
        transform: scale(0.98);
    }
`
const Register = () => {
  return (
    <Container>
        <Title>Register</Title>
        <Form action="">
            <Input type="text" placeholder='First Name' />
            <Input type="text" placeholder='Last Name' />
            <Input type="email" placeholder='Email' />
            <Input type="password" placeholder='Password' />
            <Input type="password" placeholder='Confirm Password' />
            <Input type="submit" placeholder='Submit' />
        </Form>
    </Container>
  )
}

export default Register
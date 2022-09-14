import React from 'react'
import styled from 'styled-components'
import { tablet } from '../responsive';

const Container = styled.header`
    padding: 2rem 1rem;
    ${tablet("display:flex;")}
`

const Left = styled.div`
    margin-bottom: 2rem;
    flex: 1;
`
const Title = styled.h2`
    margin-bottom: 1rem;
`
const Text= styled.span`
    opacity: 0.85;
`
const Link= styled.a`
    display: block;
    color: black;
    text-decoration: none;
    opacity: 0.85;
`
const Input = styled.input`
    padding: 0.3rem 1rem;
`

const Right = styled.div`
    flex: 1;
`
const Button = styled.button`
    border: none;
`

const Middle = styled.h1`

`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>Nicholas</Title>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam minima commodi fugiat debitis maiores, dolores nesciunt nemo cum numquam itaque molestias eius perferendis vitae natus officia veritatis sit illo consectetur?</Text>
        </Left>
        <Right>
            <Title>Contact</Title>
            <Link href="tel:+2349033398824">09033398824</Link>
            <Link href="mailto:nicholasduadei7@gmail.com">nicholasduadei7@gmail.com</Link>
        </Right>
    </Container>
  )
}

export default Footer;
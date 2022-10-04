import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Links from './Links'

const Container = styled.header`
    background: #edeae5;
    @media only screen and (min-width: 640px) {
        padding: 1rem 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
`
const Input = styled.input`
    padding: 0.3rem 1rem;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: .5rem
`
const Button = styled.button`
    border: none;
`

const Middle = styled.div`
    flex: 1;
    text-align: center;
    text-decoration: none;
`
const Title = styled.h1`
`


const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
        <Left>
            Search: <Input type="text" />
        </Left>
        <Middle>
            <Links to='/'>
                <Title>Nick's Inc</Title>
            </Links>
        </Middle>
        <Right>
            <Link to='/register'>
                <Button>Register</Button>
            </Link>
            <Link to='/login'>
                <Button>Sign In</Button>
            </Link>
            <Link to='/cart'>
                <Button>Cart {quantity}</Button>
            </Link>
        </Right>
    </Container>
  )
}

export default Header
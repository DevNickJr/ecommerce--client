import React from 'react'
import styled from 'styled-components'

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

const Middle = styled.h1`
    flex: 1;
    text-align: center
`


const Header = () => {
  return (
    <Container>
        <Left>
            Search: <Input type="text" />
        </Left>
        <Middle>Nick's Inc</Middle>
        <Right>
            <Button>Register</Button>
            <Button>Sign In</Button>
            <Button>Cart</Button>
        </Right>
    </Container>
  )
}

export default Header
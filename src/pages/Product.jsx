import React from 'react'
import Header from '../components/Header'
import Ads from '../components/Ads'
import styled from 'styled-components'
import { categories } from "../data"
import { tablet } from '../responsive'

const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    ${tablet("flex-direction: row;")}
`
const Left = styled.div`
    flex: 1;
`
const Img = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    flex: 1 1 0px;
    ${tablet("height: 80vh;")}
`
const Right = styled.div`
    flex: 1;
    ${tablet("padding: 0 1rem;")}
`
const Title = styled.h1`
    margin-bottom: 2rem;
    ${tablet("font-size: 2.5rem;")}
    
`
const Text = styled.span`
    display: block
`
const Price = styled.span`
    display: block;
    font-size: 2rem;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin: 1rem 0; 
`
const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
const ColorHead = styled.div`
    
`
const Color = styled.div`
    
`
const SizeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0; 
`
const Product = () => {
  return (
    <>
        <Header />
        <Ads />
        <Container>
            <Left>
                <Img src={categories[0].img} />
            </Left>
            <Right>
                <Title>Dorem JumpSuit</Title> 
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, harum maxime enim mollitia deserunt quasi unde natus distinctio blanditiis, reprehenderit asperiores ut, animi voluptatem qui non impedit. Placeat, similique architecto.</Text>
                <Price>$50.00</Price>
                <Filter>
                    <ColorContainer>
                        <ColorHead>Color</ColorHead>
                        <Color>r</Color>
                        <Color>r</Color>
                        <Color>r</Color>
                    </ColorContainer>
                    <SizeContainer>
                        <span>Size</span>
                        <select name="size" id="">
                            <option value="red">XS</option>
                            <option value="red">S</option>
                            <option value="red">L</option>
                            <option value="red">XL</option>
                            <option value="red">XXL</option>
                        </select>
                    </SizeContainer>
                </Filter>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                    <button>Add to Cart</button>
                </div>
            </Right>
        </Container>
    </>
  )
}

export default Product
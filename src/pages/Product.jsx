import React from 'react'
import Header from '../components/Header'
import Ads from '../components/Ads'
import styled from 'styled-components'

const Container = styled.div`
    padding: 1rem;
`
const Category = styled.h1`
    margin-bottom: 2rem;
`

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`

`
const Right = styled.div`

`

const Product = () => {
  return (
    <>
        <Header />
        <Ads />
        <Container>
            <Category>Dresses</Category>
            <FilterContainer>
                <Left>
                    Filter Product
                    <select name="color" id="">
                        <option value="red">Color</option>
                        <option value="red">Red</option>
                        <option value="red">Yellow</option>
                        <option value="red">Green</option>
                        <option value="red">Blue</option>
                    </select>
                    <select name="size" id="">
                        <option value="red">Size</option>
                        <option value="red">XS</option>
                        <option value="red">S</option>
                        <option value="red">L</option>
                        <option value="red">XL</option>
                        <option value="red">XXL</option>
                    </select>
                </Left>
                <Right>
                    Filter Product
                    <select name="sort" id="">
                        <option value="red">Newest</option>
                        <option value="red">Price (desc)</option>
                        <option value="red">Price (asc)</option>
                    </select>    
                </Right>
            </FilterContainer>
        </Container>
    </>
  )
}

export default Product
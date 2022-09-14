import React, { useEffect } from 'react';
import styled from "styled-components";
import Header from "../components/Header"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { sliderItems, categories, popularProducts }from "../data"


const SaleWrapper = styled.div`
    display: flex;
    min-width: 100vw;
    translate: ${props => props.count ? -props.count*100 + `vw;` : "0vw"};
    transition: all 1s ease-in-out;
`
const Sale = styled.div`
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-width: 100vw;
    @media only screen and (min-width: 640px) {
                display: flex;
                height: 100vh;
            }
`
const Img = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    flex: 1 1 0px;
    @media only screen and (min-width: 640px) {
        width: 50%;
        height: 100%;
    }
`
const SaleContent = styled.div`
    flex: 1;
    padding: 1rem;
`

const SaleHead = styled.h1`
    margin-bottom: 2rem;
`
const SaleText = styled.p`
    margin-bottom: 2rem;
`
const Button = styled.button`
    padding: 0.5rem 1rem;
    box-shadow: 2px 2px 3px black;
    background: 
`
const Products = styled.section`
    padding: 3rem 1rem;
    @media only screen and (min-width: 640px) {
        display: flex;
        gap: 0.5rem;
    }
`
const ProductText = styled.div`
    display: flex;
    opacity: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    transition: all .5s ease;
`
const Product = styled.div`
    flex: 1;
    position: relative;

    &:hover ${ProductText} {
        opacity: 1;
      }
`
const ProductImg = styled(Img)`
    @media only screen and (min-width: 640px) {
        flex: 1 1 0px;
        width: 100%;
        height: 100%;
    }
`

const ProductHead = styled.h3`
    color: white;

`
const ProductButton = styled(Button)`
    font-size: 0.7rem;
    padding: 0.5rem;
`
const PopularProducts = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
    gap: 0.5rem;
    padding: 0 1rem 3rem;
`
const PopularProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: honeydew;
    height: 300px;
`
const PopularProductImg = styled.img`
    width: 70%;
    object-fit: cover;

`

const Home = () => {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        setTimeout(()=> {
            console.log(count)
            if (count<2) {
                setCount(prev => prev+1);
            }else {
                setCount(0);
            }
    
            }, 3000)
    })
  return (
    <>
        <Header />
        <SaleWrapper count={count}>
            {categories.map(category => {
                return (
                    <Sale key={category.id}>
                        <Img src={category.img} />
                        <SaleContent>
                            <SaleHead>SUMMER SALE</SaleHead>
                            <SaleText>DONT COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</SaleText>
                            <ProductButton>SHOP NOW</ProductButton>
                        </SaleContent>
                    </Sale>
                )
            })}
        </SaleWrapper>
        <Products>
            <Product>
                <ProductImg src={categories[0].img} />
                <ProductText>
                    <ProductHead>SHIRT STYLE</ProductHead>
                    <ProductButton>SHOP NOW</ProductButton>
                </ProductText>
            </Product>
            <Product>
                <ProductImg src={categories[0].img} />
                <ProductText>
                    <ProductHead>LOUNGEWEAR LOVE</ProductHead>
                    <ProductButton>SHOP NOW</ProductButton>
                </ProductText>
            </Product>
            <Product>
                <ProductImg src={categories[0].img} />
                <ProductText>
                    <ProductHead>LIGHT JACKETs</ProductHead>
                    <ProductButton>SHOP NOW</ProductButton>
                </ProductText>
            </Product>
        </Products>
        <PopularProducts>
            {popularProducts.map(product =><PopularProduct key={product.id} > <PopularProductImg src={product.img} /></PopularProduct>)}
        </PopularProducts>
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Home
import React from 'react'
import Header from './Header'
import Ads from './Ads'
import styled from 'styled-components'
import { categories } from "../data"
import { tablet } from '../responsive'

const Container = styled.div`
    padding: 1rem;
`
const Title = styled.h1`
    margin-bottom: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 500;
`
const Decision = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Button = styled.button`
    padding: 0.5rem;
`
const Section = styled.div`
    margin: 1rem 0;
    display: flex;
`
const Products= styled.div`
    flex: 4;
`
const Product = styled.div`
    
`
const ProductImg = styled.div`
    
`
const ProductDetails = styled.div`
    
`
const ProductQuantity = styled.div`
    
`
const Details = styled.div`
    
`
const DetailHead = styled.div`
    
`
const DetailText = styled.div`
    
`
const Order = styled.div`
    flex: 1;
`
const OrderTitle = styled.div`
    
`
const OrderDetails = styled.div`
    
`
const OrderDetail = styled.div`
    
`
const OrderText = styled.div`
    
`
const OrderPrice = styled.div`
    
`
const OrderTotal = styled.div`
    
`
const OrderTotalAmount = styled.div`
    
`

const Checkout = styled.div`
    
`



const Cart = () => {
  return (
    <>
        <Header />
        <Ads />
        <Container>
            <Title>Your Bag</Title>
            <Decision>
                <Button>Continue Shopping</Button>
                <div>
                    <span>Shopping bag</span>
                    <span>Your Wishlist</span>
                </div>
                <Button>Checkout Now</Button>
            </Decision>
            <Section>
                <Products>
                    <Product>
                        <ProductImg />
                        <ProductDetails>
                            <Details>
                                <DetailHead>Product:</DetailHead>
                                <DetailText>Lorem ipsum dolor sit </DetailText>
                            </Details>
                            <Details>
                                <DetailHead>ID:</DetailHead>
                                <DetailText>213456787867</DetailText>
                            </Details>
                            <Details>
                                <DetailHead>Size:</DetailHead>
                                <DetailText>35.3</DetailText>
                            </Details>
                        </ProductDetails>
                        <ProductQuantity></ProductQuantity>
                    </Product>
                </Products>
                <Order>
                    <OrderTitle>ORDER SUMMARY</OrderTitle>
                    <OrderDetails>
                        <OrderDetail>
                            <OrderText>Subtotal</OrderText>
                            <OrderPrice>$80.0</OrderPrice>
                        </OrderDetail>
                        <OrderDetail>
                            <OrderText>Estimated Shopping</OrderText>
                            <OrderPrice>$80.0</OrderPrice>
                        </OrderDetail>
                        <OrderDetail>
                            <OrderText>Shopping Discount</OrderText>
                            <OrderPrice>$80.0</OrderPrice>
                        </OrderDetail>
                        <OrderDetail>
                            <OrderTotal></OrderTotal>
                            <OrderTotalAmount></OrderTotalAmount>
                        </OrderDetail>
                    </OrderDetails>
                    <Checkout>CHECKOUT NOW</Checkout>
                </Order>
            </Section>
        </Container>

    </>
  )
}

export default Cart
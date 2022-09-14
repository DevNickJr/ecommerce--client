import React from 'react'
import styled from "styled-components";
import { tablet } from '../responsive';

const NewsLetterContainer = styled.div`
    padding: 3rem 1rem;
    text-align: center;
    background: #ffe0e0c7;
    
`
const NewsLTitle = styled.h1`
    margin-bottom: 1rem;
    font-size: 3rem;
`
const NewsLText= styled.span`
    opacity: 0.85;
`
const NewsInputContainer = styled.div`
    text-align: center;
    width: 80%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    height: 2.5rem;
    ${tablet("width: 50%;")}
`
const NewsInput = styled.input`
    flex: 4;
    height: 100%;
    border: 2px solid #0000002e;
    border-right: none;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 1rem;
`
const NewsSubmit = styled.button`
    flex: 1;
    height: 100%;
    border: 2px solid #0000002e;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
        <NewsLTitle>Newsletter</NewsLTitle>
        <NewsLText>Get timely updates from your favorite products</NewsLText>
        <NewsInputContainer>
            <NewsInput type="email" placeholder='Your Email' />
            <NewsSubmit type="submit">Sub</NewsSubmit>
        </NewsInputContainer>
    </NewsLetterContainer>
  )
}

export default NewsLetter;

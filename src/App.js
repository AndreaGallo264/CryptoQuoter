import React,{ useState, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
import cryptoImg from './crypto.jpg';
import Form from './components/Form';
import Quote from './components/Quote';
import Spinner from './components/Spinner';
import axios from 'axios';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const ImageCrypto = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  color: #d4f2f4;
  text-align: left;
  font-weight: 700;
  font-size: 45px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 90%;
    height: 3px;
    background-color: #19bde0;
    display: block;
  }
`;

function App() {

  const [currency, setCurrency] = useState('');
  const [crypto, setCrypto] = useState('');
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quoteCrypto = async () => {
    if(currency === "" || crypto === "") 
      return;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
    const result = await axios.get(url);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setQuote(result.data.DISPLAY[crypto][currency]);
    }, 3000)

    
    }

    quoteCrypto();
  }, [currency, crypto]);


  return (
    <Container>
      <div>
        <ImageCrypto
          src = {cryptoImg}
          alt = 'crypto image'
        />
      </div>
      <div>
        <Heading>Quote crypto at the moment</Heading>
        
        {(loading) ?
          <Spinner/> : 
          <Fragment>
            <Form
              setCurrency = {setCurrency}
              setCrypto = {setCrypto}
            />
            <Quote
              quote = {quote}
            />
          </Fragment> 
        }
        
      </div>
    </Container>
  );
}

export default App;

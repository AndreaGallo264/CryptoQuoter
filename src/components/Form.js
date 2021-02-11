import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';
import Error from './Error';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #19bde0;
    border: none;
    width: 100%;
    border-radius: 5px;
    color: #d4f2f4;
    transition: background-color .3s ease;
`;

const Form = ({setCurrency, setCrypto}) => {

    const currencies = [
        {code: 'USD', name: 'American dolar'},
        {code: 'MXN', name: 'Mexican Peso'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Pound'}
    ];

    const [cryptos, updateCryptos] = useState([]);
    const [error, updateError] = useState(false);
    //Custom hook selector used
    const [ currency, CurrencySelector ] = useCurrency('Choose currency', '', currencies);
    const [ crypto, CryptoSelector ] = useCrypto('Choose crypto', '', cryptos);

    useEffect(() => {
        const getCryptos = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const axiosCryptos = await axios.get(url);
            updateCryptos(axiosCryptos.data.Data);
        }
        getCryptos();
    }, []);

    const quoteCurrency = e => {
        e.preventDefault();

        if(currency === "" || crypto === ""){
            updateError(true);
            return;
        }

        updateError(false);
        setCurrency(currency);
        setCrypto(crypto);
    }

    return (
    <form onSubmit = {quoteCurrency}>
        {error ? <Error msg="Choose both options"/> : null}
        <CurrencySelector />
        <CryptoSelector />
        <Button
            type = 'submit'
            value = 'CALCULATE'
        />
    </form>
    );
}
 
export default Form;
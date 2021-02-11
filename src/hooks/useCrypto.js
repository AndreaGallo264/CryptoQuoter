import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const CryptoLabel = styled.label`
    color: #d4f2f4;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 2rem;
    display: block;
`;

const CryptoSelector = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appeareance: none;
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;
`;

const useCrypto = (label, initialState, options) => {
    //Custom hook state
    const [state, updateState] = useState(initialState);

    const Selector = () => (
    <Fragment>
        <CryptoLabel>{label}</CryptoLabel>
        <CryptoSelector
            onChange ={ e => updateState(e.target.value)}
            value = {state}
        >
            <option value="">- Select -</option>
            {options.map(option => (
                <option value={option.CoinInfo.Name} key={option.CoinInfo.Id}>{option.CoinInfo.FullName}</option>
                
            ))}
            
        </CryptoSelector>
    </Fragment>
    );

    //Return state, interface and function that modifies the state
    return [state, Selector];
}
 
export default useCrypto;

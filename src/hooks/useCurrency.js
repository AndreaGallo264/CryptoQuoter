import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const CurrencyLabel = styled.label`
    color: #d4f2f4;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 2rem;
    display: block;
`;

const CurrencySelector = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appeareance: none;
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;
`;

const useCurrency = (label, initialState, options) => {
    //Custom hook state
    const [state, updateState] = useState(initialState);

    const Selector = () => (
    <Fragment>
        <CurrencyLabel>{label}</CurrencyLabel>
        <CurrencySelector
            onChange ={ e => updateState(e.target.value)}
            value = {state}
        >
            <option value="">- Select -</option>
            {options.map(option => (
                <option value={option.code} key={option.code}>{option.name}</option>
                
            ))}
        </CurrencySelector>
    </Fragment>
    );

    //Return state, interface and function that modifies the state
    return [state, Selector];
}
 
export default useCurrency;

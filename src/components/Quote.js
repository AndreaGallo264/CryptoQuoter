import React from 'react';
import styled from '@emotion/styled';

const QuoteDiv = styled.div`
    color: #d4f2f4;
    border: 1px solid #19bde0;
    border-radius: 5px;
    padding-left: 20px;
    margin-top: 10px;
`;
const QuoteP = styled.p`
    font-size: 18px;
`;
const QuotePrice = styled.p`
    font-size: 30px;
`;

const Quote = ({quote}) => {
    if(Object.keys(quote).length === 0) return null;
    return ( 
        <QuoteDiv>
            <QuotePrice>Current price is: <span>{quote.PRICE}</span></QuotePrice>
            <QuoteP>Today's higher price was: <span>{quote.HIGHDAY}</span></QuoteP>
            <QuoteP>Today's lower price was: <span>{quote.LOWDAY}</span></QuoteP>

            <QuoteP>Last 24 hours variation: <span>{quote.CHANGEPCT24HOUR}</span></QuoteP>
            <QuoteP>Last update: <span>{quote.LASTUPDATE}</span></QuoteP>
        </QuoteDiv>
     );
}
 
export default Quote;
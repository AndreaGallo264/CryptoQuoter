import React from 'react';
import styled from '@emotion/styled';

const ErrorMsg = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
`;

const Error = ({msg}) => {
    return ( 
        <ErrorMsg>{msg}</ErrorMsg>
     );
}
 
export default Error;
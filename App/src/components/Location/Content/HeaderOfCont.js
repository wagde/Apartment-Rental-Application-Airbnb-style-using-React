import React, { Component } from 'react';
import styled from 'styled-components';
const HeaderOfCont = () => (
        <Selecet>
            <span href="#top" >Overview</span >
            <span  > Reviews</span >
            <span  > The Host</span >
            <span  > Location</span >
        </Selecet>
)
export  default HeaderOfCont;
const Selecet = styled.div`
width:80%;
display: grid;
grid-template-columns: 25% 25%  25%  25% ;
// margin-left:10%;
text-shadow: 1px 1px 1px gray; 
// box-shadow: 2px 2px 5px gray;
>span{
    text-align: center;
}
 >span:hover{
    border-bottom: solid;
    border-bottom-width: 1px;
    border-bottom-color: black;
 }
`

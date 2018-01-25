import React, { Component } from 'react';
import Home from '../../jason'
import Rating from '../../../Rating/Rating'
import styled from 'styled-components';

export default class Titleaddress   extends Component {
    render() {
        return  (

    <TitleaddressDiv>
        <h1>{this.props.title}</h1><br />
        <span>{this.props.type}</span>
        <span>. In</span>
        &nbsp;
        <span>{Home["address"].country}</span>  <span>{Home["address"].city}</span>
         <div><Rating value={3} /></div>  <br />
    </TitleaddressDiv>
)
    }
}


const TitleaddressDiv = styled.div`
>h1{
color:#3CBC8D;
}
>span{
    color:gray;
}

`
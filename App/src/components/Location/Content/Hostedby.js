import React, { Component } from 'react';
import styled from 'styled-components';
import Profile from './Overview/Profile';
export default class Hostedby extends Component {
    render() {
        return (
            <HostedBy>
                <Profile Img={this.props.Img}  />
             From:{this.props.address.country} &nbsp;{this.props.address.city} &nbsp;{this.props.address.street}

            </HostedBy>
        )
    }
}


const HostedBy = styled.div`
grid-template-columns: 50% 50% ;
text-shadow: 1px 1px 1px gray; 
text-align: center;
grid-gap: 50%;
grid-auto-rows: 100px;
// box-shadow: 2px 2px 5px gray;
width:80%;
`
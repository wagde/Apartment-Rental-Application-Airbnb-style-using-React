import React, { Component } from 'react';
import Home from '../../jason'
import Rating from '../../../Rating/Rating'
import styled from 'styled-components';
import Titleaddress from './Titleaddress';
import Profile from './Profile';
import RoomService from './RoomService'
import Amenities from './Amenities'
export default class Overview extends Component {
    render() {
        return (
            <OVERVIEW>
                <Titleaddress title={this.props.title} type={this.props.type} />
                <Profile Img={this.props.Img} />
                <RoomService theSpace={this.props.theSpace} />
                <span   id="top" id="generalDesc">{this.props.generalDesc}</span>
        
                <GeneralDesc id="guestAccess" > <h4>Guest Access:</h4>
                    <p>{this.props.guestAccess}</p>
                    <p>Other: 
                    {this.props.other}    
                    </p>
                </GeneralDesc>
                <Amenities amenities={this.props.amenities} />
            </OVERVIEW>
        )
    }
}


const OVERVIEW = styled.div`
grid-template-columns: 100% ;
text-shadow: 1px 1px 1px gray; 
text-align: center;
grid-gap: 50%;
grid-auto-rows: 100px;
// box-shadow: 2px 2px 5px gray;
width:80%;
border-top:solid 1px black;


`
const GeneralDesc=styled.div`
text-align:left;
`

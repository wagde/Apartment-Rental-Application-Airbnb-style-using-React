import React, { Component } from 'react';
import Home from '../../jason'
import Rating from '../../../Rating/Rating'
import styled from 'styled-components';
export default class Profile extends Component {

    render(){

        return(

    <ProfileDiV>
          <br/>
                <p>
                        <ProfileImg  src={this.props.Img["img"]} />
                    <br />
                    {this.props.Img["firstname"]}
                    
                </p>
                <br/>
    </ProfileDiV>
)
    }
}

const ProfileImg = styled.img`
width: 80%;
border-radius: 50%;   
`

const ProfileDiV = styled.div`

width:10%;
heigth:10%;
margin:0 auto

`
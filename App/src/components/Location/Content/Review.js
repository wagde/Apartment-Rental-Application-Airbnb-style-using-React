import React, { Component } from 'react';
import styled from 'styled-components';
import Rating from '../../Rating/Rating';
import Moment from 'react-moment';

export default class Reviews extends Component {
    render() {
        const date = new Date();
        console.log(this.props.date)
        return (
            <Review>
                <Date><Moment fromNow>{this.props.date}</Moment></Date>
                <br/>
                <ProfileImg src={this.props.userImageUrl} />
                <br/>
                <Name>{this.props.name}</Name>
                <Rating value={this.props.rating} />
                <h4>{this.props.title}</h4>
                <span>     {this.props.content}</span>
                <hr/>
            </Review>
        )
    }
}


const Review = styled.div`
float: none;
margin: 4% ;
// box-shadow: 2px 2px 5px gray;
width:100%;
margin:0 auto;
text-align: left;
>p{
    text-align: center;
}
margin-top:2%;

`

const ProfileImg = styled.img`
width: 10%;
border-radius: 50%;   
`
const Date = styled.span`
float:left;
color:gray;
`
const Name = styled.span`

margin-left: 2.5%;


`
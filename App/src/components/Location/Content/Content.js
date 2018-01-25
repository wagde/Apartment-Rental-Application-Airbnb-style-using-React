import React, { Component } from 'react';
import Overview from './Overview/Overview';
import ReviewList from './ReviewList';
import ReviewFrom from './ReviewFrom';
import Map from './Maps';
import Hostedby from './Hostedby';
import styled from 'styled-components';
import HeaderOfCont from './HeaderOfCont';
export default class Content extends Component {
    render() {
        console.log(this.props.address)
        let latlng = {};
        latlng.lat=this.props.address.lat
        latlng.lng=this.props.address.lng
        return (

            <CONTENT >
                <HeaderOfCont />
                <Overview title={this.props.title} type={this.props.type} Img={this.props.Img} theSpace={this.props.theSpace} generalDesc={this.props.generalDesc} guestAccess={this.props.guestAccess} other={this.props.others} amenities={this.props.amenities} />
                < Hostedby address={this.props.address} Img={this.props.Img} />
                <ReviewList reviews={this.props.reviews} userReviews={this.props.userReviews} />
                <ReviewFrom id={this.props.id} />
                <Google>
                    <Map latlng={latlng} />
                </Google>
            </CONTENT>
        )
    }
}
const CONTENT = styled.div`
font-family: "Times New Roman", Times, serif;
font-style: italic;
display: grid;
grid-template-columns:90% ;
width:80%;
heigth:100%;
margin-top: 2%;
margin-left:4%;
@media (max-width: 600px) {
	grid-template-columns:100% ;
    width:100%;
    margin-left:10%;
	}

 `


const Google = styled.div`

grid-template-columns: 100% ;
text-shadow: 1px 1px 1px gray; 
text-align: center;
grid-auto-rows: 100px;
width:80%;

`

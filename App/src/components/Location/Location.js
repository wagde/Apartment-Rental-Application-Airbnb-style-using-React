import React, { Component } from 'react';
import Wall from './Wall/Wall';
import Content from './Content/Content';
import Locations from '../../static/locations.json';
import styled from 'styled-components';
import CheckIn from './CheckIn/CheckIn.js'
export default class Location extends Component {
    constructor() {
        super();
        this.state = { location: [] }
        // window.addEventListener('scroll', function(e) {
        //     let elmnt = document.getElementById("checkIn");
        //     console.log(e)
        // })
        this.showCheckIn = this.showCheckIn.bind(this);
    }

    showCheckIn() {
        document.getElementById("checkIn").style.display = "block";

    }
    componentDidMount() {
        let homeId = this.props.location.pathname.slice(10, );
        this.state = {
            locations: []
        }
        fetch("/api/homeid", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ homeId: homeId })
        })
            .then(res =>
                res.json()
            )
            .then(location => {
                this.setState({ location: location });
                console.log()
            }
            )
    }

    render() {


        let selectedLocation = Locations[1];
        if (this.state.location.home) {
            return (
                <LOCATION id="location" >
                    <Wall wallImg={this.state.location.home.imageUrl} />
                    <ShowButton onClick={this.showCheckIn} >Book Now </ShowButton>
                    <CheckIn checkInCheckOut={this.state.location.home.occupancy} price={this.state.location.home.price} />
                    <Content title={this.state.location.home.title} type={this.state.location.home.type} Img={this.state.location.usersInfo[0]} theSpace={this.state.location.home.theSpace} generalDesc={this.state.location.home.generalDesc} guestAccess={this.state.location.home.guestAccess} others={this.state.location.home.others} amenities={this.state.location.home.amenities} address={this.state.location.home.address} id={this.state.location.home._id} reviews={this.state.location.home.reviews} userReviews={this.state.location.usersInfo.slice(1, )} />
                </LOCATION>
            )
        }
        else {
            return <div></div>
        }
    }
}


const LOCATION = styled.div`
`

const ShowButton = styled.button`
width: 70%;
padding: 5% 3%;
margin: 2% 0;
box-sizing: border-box;
border: none;
background-color: #3CBC8D;
color: white;
margin-left: 20%;
font-size:100%;
display:none;
@media (max-width: 600px) {
    display:block;
    margin-left:20%;
	}
`

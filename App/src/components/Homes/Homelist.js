import React, { Component } from 'react';
import styled from 'styled-components';
import Home from "./Home";
import Maps from "../Maps/Maps";
import SearchForm from "./SearchForm";
export default class Homelist extends Component {

    constructor() {
        super();
        this.state = { locations: [] };
    }
    render() {
            let Location = this.props.locations;
            let homes = Location.map((item, index) => <Home key={index} imageUrl={item.imageUrl} title={item.title} price={item.price} type={item.type} beds={item.theSpace.beds} reviews={item.reviews} id={item._id} />)
            return (<div>
                <br />
                <FullPage>
                    < Container >
                        {homes}
                    </Container>
                    <Maps latlng={Location} />
                </FullPage>
            </div>)
        }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #fff;
  color: #444;
  grid-gap: 5%;
  div:hover{
    -moz-transform: scale(1.01);
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
  }   
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);} 
  
`

const FullPage = styled.div`
  display: grid;
  grid-template-columns:75% 25%;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);} 
`

const Search = styled.input`
width: 130px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
font-size: 16px;
background-color: white;
background-image: url('searchicon.png');
background-position: 10px 10px; 
background-repeat: no-repeat;
padding: 12px 20px 12px 40px;
-webkit-transition: width 0.4s ease-in-out;
transition: width 0.4s ease-in-out;
`
const Ul = styled.ul`
width:100%;
 height:10%;
 list-style-type: none;
 margin: 0;
 padding: 0;
 overflow: hidden;
 background-color: white;
`;
const LI = styled.li`
float: left;
`;

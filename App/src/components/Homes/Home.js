import React, { Component } from 'react';
import styled from 'styled-components';
import Location from '../../static/locations.json'
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
export default class Home extends Component {

  
  avergeReview(reviews) {
    let sum = 0;
    let avg;
    let count = 0;
    for (var review of reviews) {
      count++;
      sum = sum + review.rating;
    }
    avg = sum / count;
    return [avg, count];
  }


  render() {
    let avg = this.avergeReview(this.props.reviews)[0];
    let count = this.avergeReview(this.props.reviews)[1];
    let idRoute = "/Location/" + this.props.id;

    return <HomeCont>
      <Link to={idRoute}> <IMG src={this.props.imageUrl} /></Link>
      <span><b> &#8362;  {this.props.price}</b></span>
      &nbsp;
      <span>{this.props.title}</span>
      <br />
      <TYPE>{this.props.type} &nbsp; <span> {this.props.beds} Beds  &nbsp; <i class="fa fa-bed" aria-hidden="true"></i>
      </span> </TYPE>
      <br />
      <span> <Rating value={avg} /><TYPE> {count} Rating </TYPE></span>


    </HomeCont>
  }
}

const HomeCont = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 5%;
  font-size: 100%;
  text-shadow: 2px 2px 4px gray;
  box-shadow: 2px 2px 5px gray;
  height:90%;
  min-width:150px;
  @media (max-width: 600px) {
	
	}
 
    
`
const IMG = styled.img`
postion:relative;
width:100%;
heigth:60%;
`

const TYPE = styled.span`
 font-size: 90%;
`

// @media only screen and (max-width: 400px) {
//   width:10px;
// }
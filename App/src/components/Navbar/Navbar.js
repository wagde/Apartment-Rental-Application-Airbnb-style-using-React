import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default class Navbar extends Component {
  constructor() {
    super();
    // this.state = { isLogIn: false };
    this.handleAddClick = this.handleAddClick.bind(this);
  }
  handleAddClick() {
    console.log("asdsa")
    localStorage["isLogIn"] = '';
   window.  location.reload();  }
  render() {
    return (
      <Ul>
                <LILOGO> <Img id="logo" src="https://i.pinimg.com/736x/77/e3/02/77e302b073023e88f74a820fd54df6a1--beach-logo-surf-logo.jpg" /></LILOGO>

       <LI> { localStorage["isLogIn"] && <A> Welcome { localStorage["name"]}  </A>}</LI>
        <LI><Link to="/"><A>Homes</A></Link></LI>
        <LI>{!localStorage["isLogIn"] && <Link to="/Sign Up"> <A>Sign Up</A></Link>}</LI>
        <LI onClick={this.handleAddClick} >{localStorage["isLogIn"] && <A > Log Out</A>}</LI>
        <LI>{!localStorage["isLogIn"] && <Link to="/Log In"><A>Log In</A> </Link>}</LI>
      </Ul>)
  }
}
 
const Ul = styled.ul`
   width:100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
   
`;
const A = styled.a`
  hover{
     border-bottom: solid;
     border-bottom-color: black;
     }
    font-size: 15   px;
    display: block;
    color: gray;;
    text-align: center;
    padding: 10px 10px;
    padding-top: 24px;
    text-decoration: none;
    border-bottom-size:1px;
    	${A}:hover{
	    border-bottom: solid;
      border-bottom-color: black;
	}
`
const LI = styled.li`
float: right;
@media (max-width: 400px) {
   width:100%;    } 
`;
const LILEFT = styled.li`
float: right;
height:100%;
`
  

const LILOGO = styled.li`
>img{
width: 70px;
height: 65px;
@media (max-width: 400px) {
  // width:100%;  

} 

}
     float: left;
`
const Img=styled.img`
width:100%;
height:100%;
`
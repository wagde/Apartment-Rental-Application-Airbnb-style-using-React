import React, { Component } from 'react';
import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import Cleander from './Cleander'
export default class CheckIn extends Component {
    constructor() {
        super();
        this.state = { checkIn: 0, checkOut: 0 };
        const today = new Date();
        this.dateOut = today.getFullYear() + '-' + (today.getMonth() + 2) + "-" + today.getDate();
        this.handleFailedChange = this.handleFailedChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.closeCheckIn = this.closeCheckIn.bind(this);
    }
    handleFailedChange(value, faliedName) {
        this.dateOut = value;
        this.setState({ [faliedName]: value });
    }

    closeCheckIn() {
        document.getElementById("checkIn").style.display = "none";

    }
    Api(data) {
        fetch("/api/bookhome", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res =>
                res.json()
            )
            .then(message => {
                alert(message);
            
            }
            )
    }


    handleAddClick() {
        let { checkIn, checkOut } = this.state;
        if (localStorage["isLogIn"] && checkIn && checkOut) {
            let id = window.location.pathname.slice(10, );
            this.Api({ id, checkIn, checkOut });
            document.getElementById("notLogIn").innerHTML = ""
        }
        else {
            if (!checkIn && !checkOut) {
                document.getElementById("notLogIn").innerHTML = "Some of your failed empty"
            }
            if (!localStorage["isLogIn"]) {
                document.getElementById("notLogIn").innerHTML = "You are not logedin <br> <a href='/Log In'>Login </a> <br> <a href='/Sign Up'>Sign Up </a>"
            }
        }
    }

    render() {
        return (
            <Checkin id="checkIn" >
                <div onClick={this.closeCheckIn} id="x">(X)</div>
                <h3> {this.props.price} &#8362; perday </h3>
                <hr />
                <Cleander checkInCheckOut={this.props.checkInCheckOut} handleFailedChange={this.handleFailedChange} />
                <label> Gusts: </label >
                <Select onChange={(e) => this.handleFailedChange(e.target.value, "Guest")}>
                    <option>1 Guest </option>
                    <option>2 Guest </option>
                    <option>3 Guest </option>
                    <option>4 Guest </option>
                    <option>5 Guest </option>
                </Select>
                <div id="notLogIn" ></div>
                <Button onClick={this.handleAddClick} >Book</Button>
            </Checkin>
        )
    }
}





const Checkin = styled.div`
position: absolute ;
background-color:rgba(72,72,72,0.4);
-moz-border-radius: 7px;
-webkit-border-radius: 7px;
text-shadow: 2px 2px 4px gray;
font-size: 100%;
min-width:200px;
width:30%;
left:62%;
top:60%;
display:block;

@media (min-width: 601px) {
    display:block;
} 


#x{
    display:none;
}
@media (max-width: 600px) {
    display:none;
    background-color:lightgray;
    width:100%;
    left:0%;
    top:70%;
    #x{
        display:block;
    }   
   
}

// position:fixed;
>label{
    color: #333;
    height: 5%;
    width: 25%;
    margin-top: 2%;
    margin-left: 36%;
    text-align: right;
    float:left;
    font-weight: bold;
}
`
const Input = styled.input`
width: 40%;
padding: 5% 3%;
margin: 2% 0;
box-sizing: border-box;
border: none;
background-color: #3CBC8D;
color: white;
margin-left: 9.5%;
font-size:100%;

`

const Button = styled.button`

width: 70%;
padding: 5% 3%;
margin: 2% 0;
box-sizing: border-box;
border: none;
background-color: #3CBC8D;
color: white;
margin-left: 20%;
font-size:100%;

`
const Select = styled.select`
width: 40%;
padding: 5% 3%;
margin: 2% 0;
box-sizing: border-box;
border: none;
background-color: #3CBC8D;
color: white;
margin-left: 9.5%;
font-size:100%;
margin-left: 35.5%;
`



//     grid-gap: 10px;
//         grid-template-columns: repeat(6, 100px);
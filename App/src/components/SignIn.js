import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default class SignIn extends Component {
    constructor() {
        super();
        this.state = { email: "", password: "" };
        this.handleFailedChange = this.handleFailedChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleAddClick() {

        let { email, password } = this.state;
        if (email && password) {
            this.Api(this.state);
            console.log(this.state)
            this.setState({ email: "", password: "" });
        }
        else {
            alert("Some Of Your Field Empty");
        }
    }

    handleFailedChange(value, failedName) {
        this.setState({ [failedName]: value });
    }


    Api(data) {
        fetch("/api/login", {
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

                if (message["message"] == "false") {
                    alert("password or email wrong")
                }
                else {
                    localStorage["isLogIn"] = true;
                    localStorage["name"] = message["result"].firstname;
                    localStorage["profileImg"] = message["result"].img;
                    localStorage["id"] = message["result"]._id;
                    window.location.href = "/"
                    alert("welcome" + " " + message["result"].firstname + " " + message["result"].lastname)
                }
            }
            )
    }
    render() {
        let { email, password } = this.state;

        return (
            <SIGNIN>
                <h1> Log In</h1>
                <label>Email:  </label> <Input1 type="text" value={email}
                    onChange={(e) => this.handleFailedChange(e.target.value, "email")} />
                <br />
                <label>Password: </label> <Input type="password" value={password}
                    onChange={(e) => this.handleFailedChange(e.target.value, "password")} />
                <BUTTON onClick={this.handleAddClick}> LOG IN</BUTTON>
            </SIGNIN>
        )
    }
}
const SIGNIN = styled.div`
width:50%;
float: none;
margin: 0 auto;
box-shadow: 2px 2px 5px gray;
font-family: "Lucida Console", Monaco, monospace;
min-width:300px;
backgrond-Img:"url(https://media.giphy.com/media/93aFXNByrMnAY/giphy.gif)"
`
const Input1 = styled.input`
width: 40%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: none;
background-color: #3CBC8D;
color: white;
margin-left: 9.5%;
`
const Input = styled.input`
width: 40%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: none;
background-color: #3CBC8D;
color: white;
margin-left: 5%;
`
const BUTTON = styled.button`
background-color: #3CBC8D;
border: none;
color: white;
padding: 16px 32px;
text-decoration: none;
margin: 4px 2px;
cursor: pointer;
margin-left: 20%;


`
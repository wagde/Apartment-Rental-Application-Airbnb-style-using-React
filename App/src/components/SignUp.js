import React, { Component } from 'react';
import styled from 'styled-components';

export default class SignUp extends Component {
    constructor() {
        super();
        this.handleFailedChange = this.handleFailedChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.state = { firstname: "", email: "", lastname: "", password: "", img: "" };
    }

    Api(data) {
        fetch("/api/regist", {
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
                alert(message.message);
                if (message.message == 'the registering successes') {
                    window.location.href = "/Log In"
                }
            }
            )
    }
    handleAddClick() {
        let { firstname, email, lastname, password, img } = this.state;
        if (firstname && email && lastname && password && img) {
            this.Api(this.state);
            this.setState({ firstname: "", email: "", lastname: "", password: "", img: "" });
        }
        else {
            alert("Some Of Your Field Empty");
        }
    }

    handleFailedChange(value, failedName) {
        this.setState({ [failedName]: value });
    }


    render() {
        let { firstname, email, lastname, password, img } = this.state;
        return (
            <SIGNUP>
                <h1> Sign Up </h1>
                <label>Email:  </label> <Input1 type="text" value={email}
                    onChange={(e) => this.handleFailedChange(e.target.value, "email")} />     <br />
                <label>First Name:  </label> <Input1 type="text" value={firstname}
                    onChange={(e) => this.handleFailedChange(e.target.value, "firstname")} />     <br />
                <label>last Name:  </label> <Input1 type="text" value={lastname}
                    onChange={(e) => this.handleFailedChange(e.target.value, "lastname")} />     <br />
                <label>Password: </label> <Input1 type="password" value={password}
                    onChange={(e) => this.handleFailedChange(e.target.value, "password")} /><br />
                <label>Img Link : </label> <Input1 type="link" value={img}
                    onChange={(e) => this.handleFailedChange(e.target.value, "img")} />
                <BUTTON onClick={this.handleAddClick}> LOG IN</BUTTON>
            </SIGNUP>
        )
    }
}
const SIGNUP = styled.div`
width:50%;
float: none;
margin: 0 auto;
box-shadow: 2px 2px 5px gray;
font-family: "Lucida Console", Monaco, monospace;
min-width:300px;
>label{
    color: #333;
    height: 5%;
    width: 25%;
    margin-top: 2%;
    margin-left: 1%;
    text-align: right;
    float:left;
}
`
const Input1 = styled.input`
width: 40%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: none;
background-color: #3CBC8D;
color: white;
vertical-align:top;
@media (max-width: 600px) {
	margin-left:10%;
        
	}
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
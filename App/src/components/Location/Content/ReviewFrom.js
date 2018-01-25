import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment-timezone';
export default class ReviewForm extends Component {
    constructor() {
        super()
        this.handleFailedChange = this.handleFailedChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this)
        this.state = { Description: "", title: "", Rating: 1 }
    }
    handleFailedChange(value, failedName) {
        this.setState({ [failedName]: value })
    }
    handleAddClick() {
        if (this.state.Rating && this.state.Description && this.state.title) {
            this.setState({ Description: "", Rating: 1, title: "" });
            const date = new Date();
            let newReview = { locationId: this.props.id, review: { id: localStorage.id, title: this.state.title, content: this.state.Description, rating: this.state.Rating, date } };
            this.Api(newReview)
        }
        else {
            alert("Some Of Your Field Empty")
        }
    }

    Api(data) {
        fetch("/api/addreview", {
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
            }
            )
    }
    componentDidMount() {
        const google = window.google;
        let autocompleteFormField = document.getElementById('address');
        let autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
            types: ['(cities)'],
        });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {

        })
    }
    render() {
        let { Description, Rating, title } = this.state
        return <div>
            <Form>
                <h3>Add Review</h3>
                <LabelDiv> <label>  title: </label><br />  <Input onChange={(e) => this.handleFailedChange(e.target.value, "title")} value={title} type="text" /></LabelDiv>
                <LabelDiv> <label> Description : </label><br /> <TextArea onChange={(e) => this.handleFailedChange(e.target.value, "Description")} value={Description} >Enter text here...</TextArea></LabelDiv>
                <LabelDiv> <label>  Rating 1-5: </label><br />  <Input id="rating" onChange={(e) => this.handleFailedChange(e.target.value, "Rating")} value={Rating} type="number" name="rating" min="1" max="5" /></LabelDiv>
                <BUTTON onClick={this.handleAddClick}> Add      </BUTTON  >
            </Form>
        </div>

    }

}

const LabelDiv = styled.div`


margin-left: 30%;



`


const TextArea = styled.textarea`
width: 50%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: none;
background-color: #3CBC8D;
color: white;
vertical-align:top;

height: 200px;

`
const Input = styled.input`
width: 50%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
border: none;
background-color: #3CBC8D;
color: white;
vertical-align:top; 

`
const Form = styled.div`
width:80%;
box-shadow: 2px 2px 5px gray;
font-family: "Lucida Console", Monaco, monospace;
min-width:300px;
margin-top:2%;

`

const BUTTON = styled.button`
background-color: #4CAF50;
border: none;
color: white;
padding: 16px 32px;
text-decoration: none;
margin: 4px 2px;
cursor: pointer;

`
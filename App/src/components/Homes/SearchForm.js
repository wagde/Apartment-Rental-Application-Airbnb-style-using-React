import React, { Component } from 'react';
import styled from 'styled-components';

export default class SearchForm extends Component {
    constructor() {
        super();
        this.state = { city: false, price: false, guest: false, date: false };
        this.handleFailedChange = this.handleFailedChange.bind(this);
        this.handleFailedChangePrice = this.handleFailedChange.bind(this);
        this.SearchByCityGuest = this.SearchByCityGuest.bind(this);
    }
    handleFailedChange(value, failedName) {
        if (failedName == "city" || failedName == "guest") {
            this.SearchByCityGuest({ failedName, value })
        }
        else {
            this.setState({ [failedName]: value });
        }
    }
    handleAddClickFromTo(failedName) {
        let { priceFrom, priceTo, dateFrom, dateTo } = this.state;
        if (failedName == "price") {
            this.SearchByDatePrice({ priceFrom, priceTo,failedName:"price" })
        }
        if (failedName == "date") {
            this.SearchByDatePrice({ dateFrom, dateTo,failedName:"date" })
        }
    }
    SearchByCityGuest(data) {
        this.props.onNewSearchCityGuest(data)
    }
    SearchByDatePrice(data) {
        console.log(data);
        this.props.onNewSearchPriceDate(data)
    }

    onClick(value) {
        this.setState({ [value]: !this.state[value] });
       this. autoComplete();
    }

    autoComplete() {
        const google = window.google;
        let autocompleteFormField = document.getElementById('address');
        let autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
            types: ['(cities)'],
        });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {

        })
    }
    render() {
        let { city, price, guest, date } = this.state;

        return(
            <Ul>
                <ButtonDiv>
                    <Button onClick={() => this.onClick("city")}>City</Button>
                    <Button onClick={() => this.onClick("price")}>Price </Button>
                    <Button onClick={() => this.onClick("guest")}>Guest </Button>
                    <Button onClick={() => this.onClick("date")}>Date </Button>
                </ButtonDiv>
                {city ? <Div>
                    <i class="fa fa-map" aria-hidden="true"></i>

                    <INPUT id="address" type="text" onChange={(e) => this.handleFailedChange(e.target.value, "city")} name="search" placeholder="City" />
                    <div id="notfound"></div>
                </Div> : null}
                {price ? <Div>
                    <INPUT type="number" placeholder="Price &#8362;" min="1" onChange={(e) => this.handleFailedChange(e.target.value, "priceFrom")} />
                    <INPUT type="number" placeholder="To Price &#8362;" min="1" onChange={(e) => this.handleFailedChange(e.target.value, "priceTo")} />
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <Button onClick={() => this.handleAddClickFromTo("price")}>Search </Button>
                </Div> : null}
                {guest ? <Div>
                    <i class="fa fa-male" aria-hidden="true"></i>
                    <INPUT type="number" name="search" min="1" placeholder="Guest" onChange={(e) => this.handleFailedChange(e.target.value, "guest")} />
                </Div> : null}
                {date ? <Div>
                    <INPUT type="date" name="search" placeholder="From" onChange={(e) => this.handleFailedChange(e.target.value, "dateFrom")} />
                    <INPUT type="date" name="search" placeholder="TO" onChange={(e) => this.handleFailedChange(e.target.value, "dateTo")} />
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <Button onClick={() => this.handleAddClickFromTo("date")}>Search </Button>
                </Div> : null}
            </Ul>

        )
    }
}

const Ul = styled.div`
width:100%;
height:10%;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: white;
`;

const Div = styled.div`
float: left;
width:20%;
margin-top: 1%;
color:#259581;
margin-left:4%;

`;
const Search = styled.input`
width: 1;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
font-size: 16px;
background-color: white;
background-position: 10px 10px; 
background-repeat: no-repeat;
padding: 12px 20px 12px 40px;
-webkit-transition: width 0.4s ease-in-out;
transition: width 0.4s ease-in-out;
`
const INPUT = styled.input`
width: 60%;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
font-size: 16px;
background-color: white;
background-position: 10px 10px; 
background-repeat: no-repeat;
padding: 12px 20px 12px 40px;
-webkit-transition: width 0.4s ease-in-out;
transition: width 0.4s ease-in-out;
margin-left:10%;
color :black;
@media (max-width: 600px) {
	width:150%;
	}


`

const Button = styled.button`
background-color:#259581 ;
border: none;
color: white;
padding: 1% 1%;
text-align: center;
text-decoration: none;
display: inline-block;
margin: 0% 0.1%;
cursor: pointer; 
font-size: 100%;
border-radius:10%;

${Button}:hover{
    background-color: #111;
    color: #259581;
    font-weight: bold;
 
}
@media (max-width: 600px) {
    width:100%;
    margin-top:2%;
	}
 



}
`

const ButtonDiv = styled.div`
margin-left:4%;
margin-top:5%;
`
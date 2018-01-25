import React, { Component } from 'react';
import styled from 'styled-components';
import Homelist from "./Homelist";
import Maps from "../Maps/Maps";
import SearchForm from "./SearchForm";
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
let Moment = require('moment');
export default class Homes extends Component {
    constructor() {
        super();
        this.state = { locations: [], filterLoca: [], date: moment() };
        this.handleNewSearchCityGuest = this.handleNewSearchCityGuest.bind(this);
        this.handleNewSearchPriceDate = this.handleNewSearchPriceDate.bind(this);
    }

    handleNewSearchCityGuest(itemName) {
        let { locations, filterLoca } = this.state;
        let location = [];
        for (let home of this.state.locations) {
            let str = home.address.city.toLowerCase();
            let search = itemName.value.toLowerCase();
            if (str.search(search) + 1 && itemName.failedName == "city") {
                location.push(home);
                document.getElementById("notfound").innerHTML = "Finded" + " " + location.length + " " + "Result";
            }
            if (home.theSpace.guests >= parseInt(itemName.value) && itemName.failedName == "guest") {
                location.push(home);
            }
        }
        filterLoca = location
        this.setState({ filterLoca });
    }

    checkDate(checkInDateOfHome, searchDate) {
        if (!checkInDateOfHome) {
            return true;
        }
        for (let date of checkInDateOfHome) {
            console.log(checkInDateOfHome)            
            if (!Moment(searchDate.dateFrom).isBetween(date.checkin, date.checkout, 'day', []) || !Moment(searchDate.dateTo).isBetween(date.checkin, date.checkout, 'day', [])) {
                return false;
            }
        }
        return true;
    }

    
    handleNewSearchPriceDate(itemName) {
        let { locations, filterLoca } = this.state;
        let location = [];
        for (let home of this.state.locations) {
            if (itemName.failedName == "price") {
                if (home.price <= itemName.priceTo && home.price >= itemName.priceFrom) {
                    location.push(home)
                }
            }
            else {
                if (this.checkDate(home.occupancy, { dateFrom: itemName.dateFrom, dateTo: itemName.dateTo })) {
                    location.push(home)
                   
                }
            }
        }
        filterLoca = location
        this.setState({ filterLoca });
    }


    componentDidMount() {
        this.state = {
            locations: []
        }
        fetch("/api/homes", {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res =>
                res.json()
            )
            .then(locations => {
                let filterLoca = locations;
                this.setState({ locations, filterLoca });
            }
            )
    }
    render() {
        return <div>
            <SearchForm onNewSearchCityGuest={this.handleNewSearchCityGuest} onNewSearchPriceDate={this.handleNewSearchPriceDate} />
            {this.state.filterLoca[0] && <Homelist locations={this.state.filterLoca} searchCity={this.state.locations} />}
        </div>

    }
}


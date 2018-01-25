import React, { Component } from 'react';
import Router from './Router/Router'
export default class App extends Component {
    constructor() {
        super();
        this.state = { items: [] }
        this.handleNewReview = this.handleNewReview.bind(this);
    }

    handleNewReview(newReview) {
        this.state.items.push(newReview);
        this.setState({ items: this.state.items });
        console.log(this.state.items)
    }

    render() {
        
        return (
            <div>
               <Router/> 
            </div>
        )
    }
}

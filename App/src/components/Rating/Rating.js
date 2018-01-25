import React, { Component } from 'react';
export default class Rating extends Component {
    render() {
        let rows = []
        let value = this.props.value;
        for (var i = 0; i < 5; i++) {
            if (value <= i) {
                var className = "fa fa-star-o"
            }
            else {
                var className = "fa fa-star"
            }
            rows.push(<i key={i} className={className} aria-hidden="true"></i>);
        }
        return (
            <div>{rows}</div>
        )
    }
}
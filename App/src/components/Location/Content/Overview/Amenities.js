import React, { Component } from 'react';
import styled from 'styled-components';

export default class Amenities extends Component {
    render() {
        let amenities=[];
        console.log(this.props.amenities)
        for(var i of this.props.amenities){
            amenities.push(<div>{i}</div>)
        }
        return (
        <div >
             <Hr/> 
         <h4>Amenities:</h4>
         
             {amenities}
             <Hr/>
        </div>
         
    )
}
}

const Hr=styled.hr`
width:90%;

`
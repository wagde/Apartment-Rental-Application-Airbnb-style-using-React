import React from 'react'
import Gallery from 'react-grid-gallery';
import styled from 'styled-components';
// import CheckIn from '../CheckIn/CheckIn';
class Wall extends React.Component {
    constructor() {
        super();
        this.state = {
            showPicture: false
        }
    }
    onClick(e) {
        e.preventDefault();
        this.setState({ showPicture: !this.state.showPicture })
    }
    render() {

        let style = { backgroundImage: "url(" + this.props.wallImg + ")" }
        return (
            <Walldiv style={style} >
                {/* <CheckIn price={this.props.price} /> */}
            </Walldiv>
        );
    }
}
export default Wall

const Walldiv = styled.div`
    width:100%;
    height: 400px;
    background-repeat: no-repeat;
    background-size: 100%;
    float: none;
    margin: 0 auto;
`
const Divbutton = styled.div`
position:relative;
  width:auto;
  height: 20px;
  display:inline-block;
  border-style: solid;
     border-radius: 10%; 
     background-color: white;
     border: 2px;
  padding:3px 8px 3px 8px;
  font-size:13px;
   left:20%;
   top:20%;
   font-weight: bold;
   box-shadow: 1px 1px 5px black;
  

`
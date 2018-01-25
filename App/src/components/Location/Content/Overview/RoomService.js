import React, { Component } from 'react';
import Home from '../../jason'
import styled from 'styled-components';

export default class RoomService extends Component {

        render() {
                return (


                        <RoomSer>
                                <span>{this.props.theSpace.guests} &nbsp; <i class="fa fa-user" aria-hidden="true"></i>guests </span>
                                &nbsp;
<span>{this.props.theSpace.bedrooms} &nbsp; <i class="fa fa-home" aria-hidden="true"></i>Rooms </span>
                                &nbsp;
<span>{this.props.theSpace.beds} &nbsp; <i class="fa fa-bed" aria-hidden="true"></i>Beds </span>
                                &nbsp;
<span>1 &nbsp; <i class="fa fa-bath" aria-hidden="true"></i>
                                        baths </span>

                                <p>{this.props.theSpace.description}</p>
                                <br/>
                        </RoomSer>
                )
        }
}

const RoomSer = styled.div`
color: SlateGray;
>p{
        color:gray;
}
`



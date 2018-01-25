import React, { Component } from 'react';
import Review from './Review';
import styled from 'styled-components';

export default class ReviewList extends Component {

    joinUserReview() {
        let reviews = this.props.reviews;
        for (var i = 0; i < this.props.userReviews.length; ++i) {
            reviews[i].name = this.props.userReviews[i].firstname
            reviews[i].userImageUrl = this.props.userReviews[i].img
        }
        console.log(reviews)
    }

    render() {
        this.joinUserReview()
        let review = this.props.reviews.map((item, index) => <Review title={item.title} name={item.name} userImageUrl={item.userImageUrl} content={item.content} date={item.date} rating={item.rating} />)
        return (<Reviewlist>
            <hr />
            <h3> {review.length} &nbsp;  Reviews:</h3>

            {review}



        </Reviewlist>)

    }
}

const Reviewlist = styled.div`
grid-template-columns: 50% 50% ;
text-shadow: 1px 1px 1px gray; 
text-align: center;
grid-gap: 50%;
grid-auto-rows: 100px;
width:80%;
// border-top:solid 1px black;
>hr{
    width:90%;
}
`
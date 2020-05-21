// Code MovieReviews Here

import React from 'react'

const MovieReviews = ({reviews}) => (
    <div className='review-list'>
        {reviews.map(review => <Review title = {review.display_title} byline = {review.byline} headline = {review.headline} summary_short = {review.summary_short} />)}
    </div>
)

const Review = ({ title, byline, headline, summary_short}) => {
    return (
        <div className='review'>
            <h1>{title}</h1>
            <h2>{byline}</h2>
            <h3>{headline}</h3>
            <p>{summary_short}</p>
        </div>
    )
}

export default MovieReviews
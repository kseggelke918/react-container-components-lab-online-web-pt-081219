import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault;
        fetch(URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(return => this.setState({ reviews: return.results}))
    }

    render(){
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit = {this.handleSubmit}></form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
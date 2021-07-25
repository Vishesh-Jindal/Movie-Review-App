import React, { Component } from "react";
import { StoreContext } from "..";
import { addToFavourites, removeFromFavourites } from "../actions";

class MovieCard extends Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addToFavourites(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-pic" />
        </div>
        <div className="right">
          <div className="title">
            {movie.Title} ({movie.Year})
          </div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
class MovieCardWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => (
          <MovieCard
            dispatch={store.dispatch}
            movie={this.props.movie}
            key={this.props.movie.imdbID}
            isFavourite={this.props.isFavourite}
          ></MovieCard>
        )}
      </StoreContext.Consumer>
    );
  }
}
export default MovieCardWrapper;

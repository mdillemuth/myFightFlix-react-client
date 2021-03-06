import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux
import { Link } from 'react-router-dom';
// Components & Styling
import Button from 'react-bootstrap/Button';
import './movie-card.scss';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    if (movie) {
      return (
        <div className='movie-card bg-white m-2 p-2 rounded d-flex flex-column justify-content-between align-items-center'>
          <div className='d-flex flex-column align-items-center'>
            <img
              src={movie.ImagePath}
              className='movie-card-img rounded mb-2'
            />
            <p className='h5 text-center text-dark font-weight-semi-bold'>
              {movie.Title}
            </p>
          </div>
          <p className='movie-card-description text-muted'>
            {movie.Description}
          </p>
          <Link to={`/movies/${movie._id}`}>
            <Button size='sm' variant='primary' className='w-100'>
              View
            </Button>
          </Link>
        </div>
      );
    } else {
      return null;
    }
  }
}

// PropTypes
MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string,
    }),
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MovieCard;

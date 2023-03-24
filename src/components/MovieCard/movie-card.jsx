import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import './movie-card.scss';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="movie-card" style={{ width: '20rem'}}>
      <Card.Img className="card-image" variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant='primary' className="open-button" style={{ cursor: "pointer"  }}>
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

  //here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
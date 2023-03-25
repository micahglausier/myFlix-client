import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import './movie-card.scss';

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="movie-card" style={{ cursor: "pointer", marginTop: '10px', border: '2px solid black' }} onClick={() => onMovieClick(movie)}>
      <Card.Img className="card-image" variant="top" src={movie.image} width="300" height="450" />
      <Card.Body>
        <Card.Title style={{ display: 'flex',  justifyContent:'center', alignItems:'center', fontSize: '21px'}}>{movie.title}</Card.Title>
        <Card.Text style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>{movie.director}</Card.Text>
        <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>
        <Button onClick={() => onMovieClick(movie)} variant='primary' className="open-button" style={{ cursor: "pointer", border: '1px solid black'  }}>
          Open
        </Button>
        </div>
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
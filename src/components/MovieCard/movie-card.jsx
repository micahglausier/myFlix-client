import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
export const MovieCard = ({ movie, toggleFavorite, favoriteMovies }) => {
  const isFavorite = favoriteMovies.includes(movie._id);
  return (
    <Card
      className="h-100"
      style={{ backgroundColor: "#33364D", border: "2px solid #CC6F57" }}
    >
      <Card.Img src={movie.ImagePath} />
      <Card.Body>
        <Card.Title
          style={{ color: "#e5dac6", textAlign: "center", fontSize: "18px" }}
        >
          {movie.Title}
        </Card.Title>
        <Card.Text
          style={{ color: "#e5dac6", textAlign: "center", fontSize: "15px" }}
        >
          {movie.Director.Name}
        </Card.Text>
        {!isFavorite ? (
          <AiOutlineHeart
            className="heart"
            onClick={() => toggleFavorite(movie._id)}
            style={{
              color: "#CC6F57",
              textAlign: "center",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "10px",
            }}
          />
        ) : (
          <AiFillHeart
            className="heart"
            onClick={() => toggleFavorite(movie._id)}
            style={{
              color: "#CC6F57",
              textAlign: "center",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "10px",
            }}
          />
        )}
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button
            variant="link"
            style={{
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              backgroundColor: "#CC6F57",
              marginBottom: "10px",
              textDecoration: "none",
            }}
          >
            Open
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
  }).isRequired,
};

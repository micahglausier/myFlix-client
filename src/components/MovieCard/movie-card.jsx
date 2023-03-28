import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

//here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

// export const MovieCard = ({ movie, onMovieClick }) => {
//   return (
//     <Card
//       className="movie-card"
//       style={{
//         cursor: "pointer",
//         marginTop: "10px",
//         border: "3px solid #9B5143",
//         boxShadow:
//           "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
//         backgroundColor: "#33364D",
//       }}
//       onClick={() => onMovieClick(movie)}
//     >
//       {/* <Card.Title
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "20px",
//           color: "#343F71",
//         }}
//       >
//         {movie.title}
//       </Card.Title> */}
//       <Card.Img
//         className="card-image"
//         variant="top"
//         src={movie.image}
//         width="300"
//         height="450"
//       />
//       <Card.Body>
//         <Card.Text
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "13px",
//             color: "#e5dac6",
//           }}
//         >
//           Directed By: {movie.director}
//         </Card.Text>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Button
//             onClick={() => onMovieClick(movie)}
//             className="open-button"
//             style={{
//               backgroundColor: "#e5dac6",
//               color: "#33364D",
//               cursor: "pointer",
//               height: "50px",
//               width: "100px",
//               boxShadow:
//                 "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
//               fontWeight: "600",
//               border: "2px solid #CC6F57",
//             }}
//           >
//             View
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };


import { Button, Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./movie-view.scss";
export const MovieView = ({ movies, movie, toggleFavorite, favoriteMovies }) => {
  
  const { movieId } = useParams();
  const movi = movies.find((m) => m._id === movieId);
  

  
  return (
    <Container style={{ marginBottom: "50px" }}>
      <Col>
        <img
          src={movi.ImagePath}
          alt=""
          style={{
            height: "700px",
            float: "left",
            border: "2px solid #CC6F57",
            borderRadius: "2em",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
          }}
        />
      </Col>
      <Col>
        <Row>
          <Col>
            <h1
              style={{
                fontFamily: "exo-soft",
                color: "#CC6F57",
                textShadow: ".05em .05em 0 hsl(200 50% 30%)",
                fontSize: "45px",
                marginLeft: "25px",
              }}
            >
              {movi.Title}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col
            className="movieDirector"
            style={{ color: "#33364D", marginLeft: "25px" }}
          >
            <h2>
              <b>Director:</b>
              <br></br> {movi.Director.Name}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col
            className="movieGenre"
            style={{ color: "#33364D", marginLeft: "25px" }}
          >
            <p>
              <b>Genre:</b>
              <br></br> {movi.Genre.Name}
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="movieDescription"
            style={{ color: "#33364D", marginLeft: "25px" }}
          >
            <p>
              <b>Description:</b>
              <br></br>
              {movi.Description}
            </p>
          </Col>
        </Row>
        <Row>
          <p style={{ color: "#33364D", marginLeft: "25px" }}>
            <b>Trailer:</b>
          </p>
        <video src={movi.TrailerPath} style={{marginLeft: "25px", marginBottom: "10px", maxWidth: "350px" }}  controls>
        </video>
        </Row>
        <Link to={`/`}>
          <Button
            variant="primary"
            style={{
              marginLeft: "35px",
              backgroundColor: "#CC6F57",
              marginBottom: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
            }}
          >
            Back
          </Button>
        </Link>
      </Col>
    </Container>
  );
};
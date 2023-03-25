import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import { SignupView } from "../SignUpView/signup-view";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);



  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://myflix-micah.herokuapp.com/movies", {
      headers: {Authorization: `Bearer ${token}`}
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('data', data);
          const moviesFromApi = data.map((movie) => {
            return {
              id: movie._id,
              title: movie.Title,
              image: movie.ImagePath,
              director: movie.Director.Name,
              description: movie.Description,
              genre: movie.Genre.Name
            }
            });
          setMovies(moviesFromApi);
        })
    }, [token])

     // 'if' statements are replaced by ternary operators '?:' - if true, if false, and combined into one peice of code wrapped in Row
     return (
      <Row className="justify-content-md-center">
        {!user ? (
          <Col md={5} className="text-danger">
            <h1 className="text-danger" style= {{ display: 'flex',  justifyContent:'center', alignItems:'center', fontSize: '60px' }}>myFlix</h1>
            <LoginView
              onLoggedIn={(user, token) => {
                setToken(token);
                setUser(user);
              }}
            />
            <div style= {{ display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '20px' }}>
            <h3>or</h3>
            </div>
            <SignupView />
          </Col>
        ) : movies.length === 0 ? (
          <Col md={5}>
            <h2>No Movies to Show</h2>
          </Col>
        ) : selectedMovie ? (
          <Col md={8}>
            <h2 className="text-danger" style={{ display: 'flex',  justifyContent:'center', alignItems:'center', fontSize: '60px' }}>Selected Movie</h2>
            <MovieView
              movie={selectedMovie}
              onBackClick={() => setSelectedMovie(null)}
            />
            <hr />
            <h2 className="text-danger" style={{ display: 'flex',  justifyContent:'center', alignItems:'center' }}>Other Movies</h2>
            <Row>
              {movies
                .filter((movie) => movie.genre.name == selectedMovie.genre.name)
                .map((movie) => (
                  <Col md={6} key={movie._id} style= {{ width: '300', height: '450' }}>
                    
                    <MovieCard
                      movie={movie}
                      onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                      }}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
        ) : (
          <>
            <Row>
              <Col md={3}>
                <div style= {{ marginTop: '10px'}}>
                <Button
                  onClick={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                  }}
                >
                  Logout
                </Button>
                </div>
              </Col>
            </Row>
            <h1 className="text-danger" style= {{ display: 'flex',  justifyContent:'center', alignItems:'center', fontSize: '60px' }}>myFlix</h1>
            {movies.map((movie) => (
            <Col key={movie._id} md={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))}
          </>
      )}
    </Row>
  );
};
    


/*Old Code*/
    //  if (!user) {
  //     return (
  //       <>
  //         <LoginView onLoggedIn={(user, token) => {
  //           setUser(user);
  //           setToken(token);
  //         }} />
  //         or
  //         <SignupView />
  //       </>
  //     )
  //   }
    

  //   if (selectedMovie) {
  //     return (
  //       <>
  //       <button onClick={() => { setUser(null); setToken(null); localStorage.clear();
  //       }}
  //       > Logout 
  //       </button>
  //       <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
  //       </>
  //     );
  //   }

  //   if (movies.length === 0) {
  //     return (
  //       <>
  //       <button onClick={() => { setUser(null); setToken(null); localStorage.clear();
  //       }}
  //       > Logout
  //       </button>
  //       <div>The list is empty!</div>
  //     </>
  //     );
  //   }

  // return (
  //   <div>
  //     <button onClick={() => { setUser(null); setToken(null); localStorage.clear();
  //     }}
  //   > Logout
  //   </button>
    
  //     {movies.map((movie) => (
  //       <MovieCard
  //         key={movie._id}
  //         movie={movie}
  //         onMovieClick={(newSelectedMovie) => {
  //           setSelectedMovie(newSelectedMovie);
  //         }}
  //       />
  //     ))}
  //   </div>
  // );
  //       }


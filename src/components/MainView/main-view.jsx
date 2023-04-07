import { useEffect, useState } from "react";
import { LoginView } from "../LoginView/login-view";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { SignUpView } from "../SignUpView/signup-view";
import { NavigationBar } from "../NavigationBar/navigation-bar";
import { Row, Col, Button, Container, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProfileView } from "../ProfileView/profile-view";

export const MainView = () => {
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [userFavoriteMovies, setUserFavoriteMovies] = useState(
    user ? [user.FavoriteMovies] : []
  );
  const [movieView, setMoviesView] = useState([]);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://myflix-micah.herokuapp.com/movies", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error(error);
        setUser(null);
        setToken(null);
      });
  }, [token]);

  const deregister = () => {
    fetch(`https://myflix-micah.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        alert(`Successfully deregistered`);
        setUser(null);
        setToken(null);
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleFavorite = (movieId) => {
    const favoriteMovies = userFavoriteMovies.indexOf(movieId);
    if (favoriteMovies > -1) {
      removeFavorite(movieId);
      setUserFavoriteMovies((FavoriteMovies) =>
        FavoriteMovies.filter((m) => m !== movieId)
      );
    } else {
      addToFavorite(movieId);
      setUserFavoriteMovies((FavoriteMovies) => {
        return [...FavoriteMovies, movieId];
      });
    }
  };

  const addToFavorite = (movieId) => {
    fetch(
      `https://myflix-micah.herokuapp.com/users/${user.Username}/favoriteMovies/${movieId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeFavorite = (movieId) => {
    fetch(
      `https://myflix-micah.herokuapp.com/users/${user.Username}/favoriteMovies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setMoviesView(movies);
  }, [movies]);

  const filter = (input) => {
    setMoviesView(
      movies.filter((m) => {
        return m.Title.toLowerCase().includes(input.toLowerCase());
      })
    );
  };

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
        onFilter={filter}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignUpView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLogin={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <h1>There are no movies in the list</h1>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <h1>There are no movies in the list</h1>
                ) : (
                  <>
                    {movieView.map((movie) => {
                      return (
                        <Col className="mb-5" key={movie._id} md={3}>
                          <MovieCard
                            movie={movie}
                            key={movie._id}
                            toggleFavorite={toggleFavorite}
                            favoriteMovies={userFavoriteMovies}
                          />
                        </Col>
                      );
                    })}
                  </>
                )}
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to={"/login"} replace />
                ) : (
                  <Col>
                    <ProfileView
                      user={user}
                      deregister={deregister}
                      token={token}
                      movies={movies}
                      favoriteMovies={userFavoriteMovies}
                      toggleFavorite={toggleFavorite}
                    />
                  </Col>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
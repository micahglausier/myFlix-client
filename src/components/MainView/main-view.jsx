import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";

export const MainView = () => {
  
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://myflix-micah.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        if (data.docs) {
          const moviesFromApi = data.docs.map((doc) => {
            return {
              id: doc.key,
              title: doc.title,
              author: doc.director_name?.[0]
            };
          });
          setMovies(moviesFromApi);
        }
      });
  }, []);
  
  // useEffect(() => {
  //   fetch("https://myflix-micah.herokuapp.com/movies")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const moviesFromApi = data.docs.map((doc) => {
  //         return {
  //           id: doc.key,
  //           title: doc.title,
  //           author: doc.director_name?.[0]
  //         };
  //       });
  //       setMovies(moviesFromApi);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://myflix-micah.herokuapp.com/movies")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const moviesFromApi = data.docs.map((doc) => {
  //         return {
  //           id: doc.key,
  //           title: doc.title,
  //           image: doc.image,
  //           author: doc.director?.[0]
  //         };
  //       });

  //       setBooks(booksFromApi);
  //     });
  // }, []);



  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};

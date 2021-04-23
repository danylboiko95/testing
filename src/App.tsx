import React, { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import "./index.scss";
import classes from "./App.module.scss";
import MoviesList from "./components/MoviesList/MoviesList";
import { IMovie } from "./types/Interfaces/IMovie";

import Loader from "./components/Loader/Loader";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";

function App() {
  const [searchQuery, setSeachQuery] = useState<string>("");
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?s='Guardians'&apikey=69d3c7cf`
        ); //This is for preload
        const movies = await response.json();
        setMovies(movies.Search);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  }, [isError]);

  const searchMovie = async () => {
    if (searchQuery.length >= 2) {
      setIsLoading(true);
      fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=69d3c7cf`)
        .then((res: any) => {
          return res.json();
        })
        .then((data) => {
          if (data.Search) {
            setMovies(data.Search);
          } else {
            setIsError(true);
            setErrorMessage(
              "We do not have movies for such query, please try again"
            );
            setMovies([]);
          }
        })
        .catch((e) => {
          setIsError(true);
          setMovies([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className={classes.App}>
      <Input setSeachQuery={setSeachQuery} searchMovie={searchMovie} />
      {isError && <ErrorHandler errorMessage={errorMessage} />}
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </div>
  );
}

export default App;

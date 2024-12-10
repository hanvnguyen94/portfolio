import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetails = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <motion.div
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          className="movie-detail"
        >
          <div className="headline">
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </div>
          <div className="awards">
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </div>
          <div className="image-display">
            <img src={movie.secondaryImg} alt="movie2" />
          </div>
        </motion.div>
      )}
    </>
  );
};

const Award = ({ title, description }) => {
  return (
    <div className="award">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

export default MovieDetails;

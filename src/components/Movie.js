import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <h1>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h1>
      <img src={coverImage} alt={title} />
      <p>{summary}</p>
      {genres.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;

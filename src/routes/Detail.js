import { useEffect, useState } from "react";
import { Link, json, useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMoive = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMoive();
  }, []);
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <h1>{movie.title}</h1>
      <a href={`${movie.url}`}>
        <img src={movie.medium_cover_image} alt={movie.title} />
      </a>
    </div>
  );
}

export default Detail;

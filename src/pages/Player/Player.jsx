import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjdlZmMwZGM5MGNkNjVlY2RhZTE2NTRmMzEyZjBkMyIsIm5iZiI6MTcyOTI2ODI5OS40NzI1MjksInN1YiI6IjY3MTI4OTRjOGU4NDQ2NTdiN2ZiMzRkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QMkWBIy6EaElwdlYhqxPSzwwNPLZlGTw5WDq9bE8UEM",
    },
  };

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
        width="90%"
        height="90%"
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  );
};

export default Player;

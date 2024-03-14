import React, { useEffect } from "react";
import "./listItem.scss";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [movie, setMovie] = React.useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/movies/find/" + item,
          {
            headers: {
              Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQ0ZjgwNThmOTZkNDAzNTM2NjNhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjEzMzI2MSwiZXhwIjoxNzAyNTY1MjYxfQ.tylBNCsDxMgh46RUX9pX4sE5E2NgOQ0j3-S0e8Vxysg",
            },
          }
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovie();
  }, [item]);
  return (
    <React.Fragment>
      <Link to={{ pathname: "/watch", state: { movie } }}>
        <div
          className="listItem"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={movie.img} alt="" />
          {isHovered && (
            <React.Fragment>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">{movie.desc}</div>
                <div className="genre">{movie.genre}</div>
              </div>
            </React.Fragment>
          )}
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ListItem;

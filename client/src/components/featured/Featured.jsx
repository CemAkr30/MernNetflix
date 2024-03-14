import React from "react";
import "./featured.scss";
import PlayArrow from "@material-ui/icons/PlayArrow";
import InfoOutlined from "@material-ui/icons/InfoOutlined";

const Featured = ({ type }) => {
  return (
    <React.Fragment>
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movies" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="featuredImg"
        />
        <div className="info">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
            className="logo"
          />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quibusdam, voluptatum, quia voluptatibus quod
            consequatur voluptate quos laborum doloribus quas. Quisquam
            voluptates, quibusdam, voluptatum, quia voluptatibus quod
            consequatur voluptate quos laborum doloribus quas.
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Featured;

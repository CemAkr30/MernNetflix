import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const { movie } = location.state || {};

  console.log(movie);
  return (
    <React.Fragment>
      <div className="watch">
        <Link to="/">
          <div className="back">
            <ArrowBackOutlined />
            Home
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Watch;

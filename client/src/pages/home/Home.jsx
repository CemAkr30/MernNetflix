import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = React.useState([]);
  const [genre, setGenre] = React.useState(null);

  React.useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/" +
            `lists${type ? "?type=" + type : ""}${
              genre ? "&genre=" + genre : ""
            }`,
          {
            headers: {
              Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzQ0ZjgwNThmOTZkNDAzNTM2NjNhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjEzMzI2MSwiZXhwIjoxNzAyNTY1MjYxfQ.tylBNCsDxMgh46RUX9pX4sE5E2NgOQ0j3-S0e8Vxysg",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <React.Fragment>
      <div className="home">
        <Navbar />
        <Featured type={type} />
        {lists.map((list, i) => (
          <List key={i} list={list} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;

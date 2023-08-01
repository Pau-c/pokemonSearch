import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TagCloud } from "react-tagcloud";
import generateRandomNumber from "../randomNumber";
import Card from "react-bootstrap/Card";
import { fetchShowData } from "../fetchData";


const ShowListPokemons = () => {
  const [names, setNames] = useState([]);

  const URL = "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=20";

  const showData = async () => {
    try {
      const data = await fetchShowData(URL);
      setNames(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const mappedResults = names.map((el) => ({
    value: el.name,//to set up the url with the pokemon's name
    count: generateRandomNumber(),
  }));

  return (
    <Card body className="bg-dark">
      <div id="cloud">
        <TagCloud
          minSize={12}
          maxSize={35}
          tags={mappedResults}
          renderer={(tag, size, color) => (
            <Link
              to={`/pokemones/${tag.value}`}
              style={{ fontSize: `${size}px`, color }}
            >
              {tag.value}{" "}
            </Link>
          )}
        />
      </div>
    </Card>
  );
};

export default ShowListPokemons;

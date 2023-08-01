import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineQq,
} from "react-icons/ai";
import PokemonTypes from "./PokemonTypes";
import "../../App.css"

export default function PokemonCard(props) {
  return (
    <>
      <div className="container">
        <Card className="w-25 h-auto">
          <div
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
              color: props.isFavorite ? "red" : "gray",
              cursor: "pointer",
            }}
            onClick={props.handleFavoriteToggle}
          >
            {props.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>

          <Card.Img
            variant="top"
            src={props.pokemon.Pic}
            alt="pokemon"
            className="img-fluid width: 5%"
          />
          <Card.Body>
            <Card.Title className="display-4"> {props.pokemon.name}</Card.Title>
            <Card.Text>
              <h6>
                <mark>
                  <AiOutlineQq /> Species:
                </mark>
              </h6>{" "}
              <span className="fs-4 mb-6">{props.pokemon.species}</span>
              <h6>Weight:{props.pokemon.weight}</h6>
              <h6>Height: {props.pokemon.height}</h6>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="mt-2">
              <PokemonTypes />
              <h6>
                <mark>Types:</mark>
              </h6>
              {/* adds icon to type of attack */}
              {props.pokemon.types.map((element, index) => (
                <h6 key={index}>{<PokemonTypes element={element} />}</h6>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <h6 className="mt-2">
                <mark>Abilities:</mark>
              </h6>
              {props.pokemon.abilities.map((ability, index) => (
                <h6 key={index}>{ability}</h6>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
}

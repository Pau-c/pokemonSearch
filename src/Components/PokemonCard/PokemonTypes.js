import React from "react";
import {
  AiOutlineThunderbolt,
  AiFillBug,
  AiFillFire,
  AiFillPicture,
  AiTwotoneExperiment,
  AiOutlineTwitter,
} from "react-icons/ai";

const PokemonTypes = (props) => {
  switch (props.element) {
    case "electric":
      return <span> {props.element}<AiOutlineThunderbolt className="text-danger" /></span>;
    case "bug":
      return <span> {props.element}<AiFillBug className="text-dark" /></span>;
    case "fire":
      return <span> {props.element}<AiFillFire className="text-danger" /></span>;
    case "rock":
      return <span> {props.element}<AiFillPicture className="text-secondary" /></span>;
    case "poison":
      return <span> {props.element}<AiTwotoneExperiment className="text-success" /></span>;
    case "flying":
      return <span> {props.element}<AiOutlineTwitter className="text-primary" /></span>;
    default:
      return <span> {props.element}</span>;
  }
};

export default PokemonTypes;

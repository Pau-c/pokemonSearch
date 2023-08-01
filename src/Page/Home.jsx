import React from "react";
import SearchComponent from "../Components/Search/SearchComponent";
import ShowListPokemons from "../Components/ShowList";
import Accordion from "react-bootstrap/Accordion";
import NavBar from "../Components/Nav/NavBar";
import "../App.css";
import { AiTwotoneCloud } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <NavBar />
     
<div className="container-fluid ">
  <div className="">
      <div className="row">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {" "}
              <span className="mx-3 fs-3 text-light"> Pokemon Cloud </span>
              <span className="fs-3">
                <AiTwotoneCloud className="text-light" />{" "}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              {/* cloud */}
              <ShowListPokemons />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="row ">
          <SearchComponent /></div>
        </div></div>
      </div>
    </>
  );
};
export default Home;

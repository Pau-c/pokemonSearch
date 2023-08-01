
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SearchButton from "./Button";

const SearchInput = (props) => {

return (
<InputGroup className="mb-3">

<SearchButton showData={props.showData}/>

<Form.Control
  onChange={(event) => props.setPokemonName(event.target.value)}
  value={props.pokemonName}
  type="text"
  placeholder="Search"
  className="form-control "
  aria-label="Example text with button addon"
  aria-describedby="basic-addon1"
  id="#input-search"
/>
</InputGroup>)}
export default SearchInput;
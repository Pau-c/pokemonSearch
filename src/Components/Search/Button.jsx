import Button from "react-bootstrap/Button";


const SearchButton = (props) => {
    return (
<Button
  className="rounded text-light"
  variant="outline-secondary"
  id="button-addon1"
  onClick={props.showData} //validates and sets the object with the data
>  Search </Button>

)}
export default SearchButton;
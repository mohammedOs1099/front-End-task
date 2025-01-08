import { Form } from "react-bootstrap";
import { TbSearch } from "react-icons/tb";

const SearchInput = ({ handelSearched }) => {
  return (
    <>
      <Form.Floating className="my-2 me-md-1">
        <Form.Control
          className="  rounded rounded-5"
          id="floatingInputCustom"
          onChange={(e) => handelSearched(e.target.value)}
          type="text"
          placeholder=" search Employees "
        />
        <label htmlFor="floatingInputCustom   ">
          <TbSearch size={"1.5rem"} />
          <span className="text-secondary fs-6 fw-light">search employees</span>
        </label>
      </Form.Floating>
    </>
  );
};

export default SearchInput;

import { Button } from "react-bootstrap";
const Btn = ({ onClick, name }) => {
  return (
    <>
      <Button
        onClick={onClick}
        className={` btn p-2  rounded rounded-5 me-1  w-100    `}
      >
        {name}
      </Button>
    </>
  );
};

export default Btn;

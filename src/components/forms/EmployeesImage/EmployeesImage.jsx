import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { setEmployeeImage } from "../../../redux/CustomFormikSlice";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { TbPhotoPlus } from "react-icons/tb";
import stayle from "./EmployeesImage.module.css";
import { BsArrowRepeat, BsFillTrash3Fill, BsPlusLg } from "react-icons/bs";
const { container, dropzone, img } = stayle;

const EmployeesImage = ({ edit, image, setFieldValue }) => {
  const dispatch = useDispatch();
  let { employeeImage } = useSelector((state) => state.CustomFormik);
  const [imageURL, setImageURL] = useState(edit ? image : null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
    });
  };

  useEffect(() => {
    if (employeeImage) {
      setImageURL(employeeImage);
    }
  }, [employeeImage]);
  useEffect(() => {
    if (edit) {
      dispatch(setEmployeeImage(image));
    }
  }, [dispatch, image, edit]);

  const removeImage = () => {
    dispatch(setEmployeeImage(null));
    setFieldValue("employeeImage", null);
    setImageURL(null);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: { "image/*": [".jpeg", ".png"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const base64 = await convertToBase64(file);
      setFieldValue("employeeImage", base64);
      dispatch(setEmployeeImage(base64));
    }
  });

  return (
    <>
      <h5 className="px-3 text-black">Add image</h5>
      <div className={`${container} text-black py-5 py-md-5 rounded-4`}>
        {!employeeImage ? (
          <TbPhotoPlus size={"3.5rem"} className="my-2" color={"#025466"} />
        ) : (
          <div className="me-lg-auto d-flex flex-column flex-md-row align-items-center justify-content-start">
            <img
              src={imageURL}
              alt="Uploaded preview"
              className={`${img}w-25 object-fit-cover m-2 shadow-sm rounded-3`}
            />
            <div className="d-flex flex-column justify-content-center">
              <h3 className="p-2 text-secondary fs-6">
                {employeeImage.slice(0, 22)}...
              </h3>
              <div className="d-flex align-items-center flex-column flex-md-row">
                <Button
                  onClick={() => document.getElementById("fileInput").click()}
                  variant="text"
                  size="sm"
                  className="d-flex align-items-center gap-2"
                >
                  <BsArrowRepeat color="#025466" size={"1rem"} />
                  Change
                </Button>
                <Button
                  onClick={removeImage}
                  size="sm"
                  variant="text"
                  className="d-flex align-items-center gap-2"
                >
                  <BsFillTrash3Fill color="#025466" size={"1rem"} />
                  Remove
                </Button>
              </div>
            </div>
          </div>
        )}
        <div
          {...getRootProps({
            className: `${dropzone} mx-auto rounded-2`
          })}
        >
          <input id="fileInput" {...getInputProps()} />
          {isDragAccept && <p>File accepted, drop it here</p>}
          {isDragReject && <p>Invalid file type, only images are allowed</p>}
          {!isDragActive && !employeeImage && (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Button className="btn btn-rounded-5 text-sm text-light d-flex gap-2 align-items-center">
                <BsPlusLg />
                Add image
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeesImage;

import { Fragment, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import stayle from "./Stepper.module.css";
import PersonalDateForm from "../forms/PersonalDateForm/PersonalDateForm";
import EmployeesImage from "../forms/EmployeesImage/EmployeesImage";
import { Formik } from "formik";
import validationSchema from "../../ValidationSchema/ValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalData } from "../../redux/CustomFormikSlice";
import Preview from "../../shared/Preview/Preview";
import { addEmployee, editEmployee } from "../../redux/EmployeesSlice";
const { StepCircle, StepCirclLine, small } = stayle;
const steps = [
  { label: "Personal Data", component: PersonalDateForm },
  { label: "Image", component: EmployeesImage },
  { label: "Preview", component: Preview }
];
const Stepper = ({ setShow, empoyeeData, edit }) => {
  const [activeStep, setActiveStep] = useState(0);

  let { personalData, employeeImage } = useSelector(
    (state) => state.CustomFormik
  );
  const dispatch = useDispatch();
  const initialValues = {
    employeename: "",
    startDate: "",
    email: "",
    Phone: "",
    role: ""
  };
  const handleNext = (isValid, touched, values) => {
    const isAllFieldsFilled = Object.entries(values).every(([key, value]) => {
      if (key === "employeeImage") return true;
      return value !== undefined && value !== null && value !== "";
    });


    if (activeStep === 0) {
    if (isValid && touched && isAllFieldsFilled) {
      dispatch(setPersonalData(values));
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else {
      alert("All fields are required!");
    }
    } else if (activeStep === 1) {
       setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
    
  };
  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Formik
      initialValues={edit ? empoyeeData : initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (edit) {
          dispatch(editEmployee({ updatedData: values, id: empoyeeData?.id }));
          setShow(false);
        } else {
          dispatch(addEmployee({ ...personalData, employeeImage }));
          setShow(false);
        }
      }}
    >
      {({
        setFieldValue,
        isValid,
        handleSubmit,
        handleChange,
        values,
        handleBlur,
        touched,
        errors
      }) => (
        <Container className=" ">
          <Card className="border-0 p-2">
            <Card.Body>
              <Row className="justify-content-center mx-0">
                {steps.map((step, index) => (
                  <Fragment key={index}>
                    <Col
                      xs="3"
                      className="text-center me-sm-2 p-0 d-flex align-items-center justify-content-center flex-column"
                    >
                      <div
                        className={`${
                          index <= 0 ? StepCirclLine : StepCircle
                        } rounded-circle d-flex  align-items-center justify-content-center`}
                        style={{
                          backgroundColor:
                            index === activeStep ? "#026980" : "#6c757d"
                        }}
                      ></div>
                      <small
                        className={`${small} mt-2  text-nowrap d-flex justify-content-center align-items-center`}
                        style={{
                          color: index === activeStep ? "#026980" : "#6c757d"
                        }}
                      >
                        {step.label}
                      </small>
                    </Col>
                  </Fragment>
                ))}
              </Row>

              <div className="my-1">
                {activeStep === 0 && (
                  <PersonalDateForm
                    values={values}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
                  />
                )}
                {activeStep === 1 && (
                  <EmployeesImage
                    setFieldValue={setFieldValue}
                    image={empoyeeData?.employeeImage}
                    edit={edit}
                  />
                )}
                {activeStep === 2 && (
                  <Preview
                    edit={edit}
                    setFieldValue={setFieldValue}
                    data={{ ...personalData, employeeImage }}
                  />
                )}
              </div>
              <Row className="my-4">
                <Col className="d-flex gap-2 justify-content-end">
                  {activeStep > 0 && (
                    <Button variant="outline-secondary" onClick={handleBack}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    onClick={() => {
                      if (activeStep === steps.length - 1) {
                        handleSubmit();
                      } else {
                        handleNext(isValid, touched, values);
                      }
                    }}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      )}
    </Formik>
  );
};

export default Stepper;

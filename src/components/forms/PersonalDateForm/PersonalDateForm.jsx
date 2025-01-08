import { Form } from "react-bootstrap";
const PersonalDateForm = ({
  handleChange,
  values,
  handleBlur,
  touched,
  errors,
  handleSubmit
}) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 rounded-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="employeename"
            value={values.employeename}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-4 ${
              touched.employeename && errors.employeename ? "is-invalid" : ""
            }`}
            type="text"
            placeholder="Enter employee name"
          />
          <div className="invalid-feedback">{errors.employeename}</div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            id="startDate"
            value={values.startDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-4 ${
              touched.startDate && errors.startDate ? "is-invalid" : ""
            }`}
            type="date"
          />
          <div className="invalid-feedback">{errors.startDate}</div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role*</Form.Label>
          <Form.Select
            id="role"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-4 ${
              touched.role && errors.role ? "is-invalid" : ""
            }`}
          >
            <option value="">Select Role</option>
            <option value="IT">IT</option>
            <option value="Software">Software</option>
            <option value="Data Entry">Data Entry</option>
          </Form.Select>
          <div className="invalid-feedback">{errors.role}</div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-4 ${
              touched.email && errors.email ? "is-invalid" : ""
            }`}
            type="email"
            placeholder="Enter email"
          />
          <div className="invalid-feedback">{errors.email}</div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            id="Phone"
            value={values.Phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-4 ${
              touched.Phone && errors.Phone ? "is-invalid" : ""
            }`}
            type="text"
            placeholder="Phone"
          />
          <div className="invalid-feedback">{errors.Phone}</div>
        </Form.Group>
      </Form>
    </>
  );
};
export default PersonalDateForm;

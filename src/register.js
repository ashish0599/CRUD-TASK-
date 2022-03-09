import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as YUP from "yup";

const schema = YUP.object().shape({
  email: YUP.string()
            .email(),
  age: YUP.number()
          .integer(),
  firstName: YUP.string()
                .min(6, "First Name should have more than 6 characters"),
  lastName: YUP.string()
               .min(6, "Last Name should have more than 6 Characters"),
  password: YUP.string()
               .min(6, "Password should have minimum 6 charcters"),
  confirm_password: YUP.string()
                       .oneOf([YUP.ref("password"), null],
                       "Passwords must match",
                       ),
});

function Register() {
  const [dummy, setDummy] = useState(true);
  return (
    <div className="d-flex justify-content mt-5">
      {dummy ? (
        <Card>
          <Card.Header className="text-center fs-4 fw-bold">Register</Card.Header>
          <Card.Body>
            <Formik initialValues={{
                                     age: "", 
                                     email: "", 
                                     firstName: "", 
                                     lastName: "", 
                                     password: "",
                                     confirm_password: "",
                                   }}
              validationSchema={schema}
              onSubmit={(values) => {
                setDummy(false);
              }}
            >
              <Form>
                <div className="mb-3">
                  <label>First Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="firstName"
                    component="input"
                  />
                  <ErrorMessage name="firstName" />
                </div>
                <div className="mb-3">
                  <label>Last Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="lastName"
                    component="input"
                  />
                  <ErrorMessage name="lastName" />
                </div>
                <div className="mb-3">
                  <label>Age</label>
                  <Field
                    className="form-control"
                    type="number"
                    name="age"
                    component="input"
                  />
                  <ErrorMessage name="age" />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="email"
                    component="input"
                  />
                  <ErrorMessage name="email" />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                    component="input"
                  />
                  <ErrorMessage name="password" />
                </div>
                <div className="mb-3">
                  <label>Confirm Password</label>
                  <Field
                    className="form-control"
                    type="password"
                    name="confirm_password"
                    component="input"
                  />
                  <ErrorMessage name="confirm_password" />
                </div>
              <div className="d-flex justify-content-center">
                  <button className="btn btn-warning" type="submit">Submit</button>
                </div>
              </Form>
            </Formik>
          </Card.Body>
        </Card>
      ) : (
        <div><h1>Register Successfully DONE</h1></div>
      )}
    </div>
  );
}
export default Register;

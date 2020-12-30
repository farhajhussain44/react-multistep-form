import React, { useState } from "react";
import PopupWrapper from "./components/multistep";
import Step1Form from "./components/forms/infor";
import Step2Form from "./components/forms/info2";
import { FormValidationOne } from "./validation";

import "./styles.css";

export default function App() {
  const initialState = { name: "", email: "", dob: "" };
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow(!show);
  const HandleStep = (e) => {
    e.preventDefault();
    const { isValid, errors } = FormValidationOne(values);
    if (!isValid) {
      setErrors(errors);
      return;
    }
    setStep((pre) => pre + 1);
  };
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const props = { HandleStep, HandleChange, errors, values };

  return (
    <div className="App">
      <button className="btn btn-success" onClick={handleClose}>
        Start
      </button>
      <PopupWrapper
        show={show}
        handleClose={handleClose}
        heading={"Forms"}
        defaultClass="register-from"
      >
        <Steps step={step} props={props} />
      </PopupWrapper>
    </div>
  );
}

const Steps = ({ step, props }) => {
  switch (step) {
    case 0:
      return <Step1Form props={props} />;
    case 1:
      return <Step2Form props={props} />;
    case 2:
      return <h1>Thanks</h1>;
    default:
      return <></>;
  }
};

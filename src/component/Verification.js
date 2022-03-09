import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Verification = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const handleStart = () => {
    history.push("/Identity");
  };
  const handleNextbutton = (number) => {
    setStep(number);
  };
  return (
    <div className="verification">
      <h4 className="pt-3 text-center">Complete your verification</h4>
      <div className="d-flex  container mt-5">
        <div className={step > 0 ? "circle-active" : "circle"}></div>
        <div
          className={step > 0 ? "horizontal-line-active" : "horizontal-line"}
        ></div>
        <div className={step > 1 ? "circle-active" : "circle"}></div>
        <div
          className={step > 1 ? "horizontal-line-active" : "horizontal-line"}
        ></div>
        <div className={step > 2 ? "circle-active" : "circle"}></div>
        <div
          className={step > 2 ? "horizontal-line-active" : "horizontal-line"}
        ></div>
        <div className="circle"></div>
        <div className="horizontal-line"></div>
        <div className="circle"></div>
      </div>
      <div className="container-main container">
        {step === 0 && (
          <div>
            <h5 className="text mt-2 text-center">Verify your Age</h5>
            <form className="dob mt-3">
              <input
                type="date"
                placeholder="date of birth"
                className="form-control "
              ></input>
            </form>
            <div className="d-flex  justify-content-center btngroup">
              <Button variant="contained" color="primary">
                Verify
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className="mx-5"
                onClick={() => handleNextbutton(1)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div>
            <div> step 2 identity section</div>
            <div className="d-flex  justify-content-center btngroup">
              <Button variant="contained" color="primary">
                Verify
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className="mx-5"
                onClick={() => handleNextbutton(2)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div> step 3 residence section</div>
            <div className="d-flex  justify-content-center btngroup">
              <Button variant="contained" color="primary">
                Verify
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className="mx-5"
                onClick={() => handleNextbutton(3)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Verification;

import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import moment from 'moment';
const Verification = () => {
  const [step, setStep] = useState(0);
  const history = useHistory();
  const [selectedImage, setSelectedImage] = useState();
  const [dateState, setDateState] = useState(new Date());
  const [dob, setdob] = useState('');
  const [ageVerified, setAgeVerified] = useState(false)

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
}, []);

  useEffect(()=>{
      if(dob){
        getAge()
      }
  },[dob])


  const handleNext = (number) => {
    setStep(number);

  };
  const handleDob = (e) =>{
    console.log(e.target.value)
    setdob(e.target.value)
    // let age = moment().diff(e.target.value, 'years',false);
    // console.log(age)
  }

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage("");
  };

  const handleReadyToVote = () => {
    history.push("/machine");
  };

  const getAge = () =>{
    let age = moment().diff(dob, 'years',false);
    console.log("jhshdjklsahfjklshfdjklsNCJKADS")
    if (age >18){
      setAgeVerified(true)
    }
    else{
      setAgeVerified(false)
    }
  }

  const handleAgeVerify = () =>{

  }
  return (
    <div className="verification">
      <div className="container verification-header d-flex justify-content-around">
        <h2>Complete Your Verification</h2>
        <h6>
          <div> {" "}
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
        <div>
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
          </div>
        </h6>
      </div>
      <div className="container d-flex mt-3">
        <div className={step > 0 ? "circle-active" : "circle"}></div>
        <div
          className={step > 0 ? "horizontal-line-active" : "horizontal-line"}
        ></div>
        <div className={step > 1 ? "circle-active" : "circle"}></div>
        <div
          className={step > 1 ? "horizontal-line-active" : "horizontal-line"}
        ></div>
        <div className={step > 2 ? "circle-active" : "circle"}></div>
      </div>
      <div className="container age-box">
        {step === 0 && (
          <div>
            <h4 className="mt-3 age-header">verify your age</h4>
            <input type="date" required className="form-control birthday" onChange={(e)=>handleDob(e)} />
            <div className={ageVerified?"text-success my-3":"text-danger my-3"}>{ageVerified?"you are eligible":"you are under age"} </div>
            <div className="d-flex justify-content-center">
              <Button variant="contained" color="primary" className="m-5" onClick={getAge}>
                Verify
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="m-5"
                disabled = {!ageVerified}
                onClick={() => handleNext(1)}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        <div className="identity">
          {step === 1 && (
            <div>
              <h4 className="mt-3 id-header">verify your identity</h4>
              <input
                type="file"
                accept="image/jpeg,image/gif,image/png,application/pdf"
                className="form-control"
                id="file-upload"
                onChange={imageChange}
              />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Indian
                </label>
              </div>
              <div className="container d-flex justify-content-center">
                {selectedImage && (
                  <div className="preview mt-3">
                    <img
                      className="img-preview"
                      src={URL.createObjectURL(selectedImage)}
                      alt="Thumb"
                    />

                    <button onClick={removeSelectedImage} className="delete">
                      Remove This Image
                    </button>
                  </div>
                )}
                <div>
                  <Button variant="contained" color="primary" className="m-5">
                    Upload
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    className="m-5"
                    onClick={() => handleNext(2)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="residence">
          {step === 2 && (
            <div>
              <h4 className="mt-3 res-header">verify your residence</h4>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Enter your booth number"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Enter your ID number"
              />
              <div className="d-flex justify-content-center">
                <Button variant="contained" color="primary" className="m-5">
                  Verify
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="m-5"
                  onClick={handleReadyToVote}
                >
                  Ready to Vote
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verification;
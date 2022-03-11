import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [key, setKey] = useState(1);
  const history = useHistory();

  const handleStart = () => {
    history.push("/verification")
  }

  const scrolling = useSpring({
    from: { transform: "translateX(65%)" },
    to: { transform: "translateX(-15%)" },
    config: { duration: 8000 },
    reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div className="home">
      <animated.div className="text" style={scrolling}>
        <h1>| Welcome To Voting App |</h1>
      </animated.div>
      <Button className="mt-5" variant="contained" color="secondary" onClick={handleStart} >
        Get Started
      </Button>
    </div>
  );
};

export default Home;
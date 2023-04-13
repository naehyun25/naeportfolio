import React from "react";
import lottie from "lottie-web";
import lottieAni from "./yoonlogobigcircle.json";

const Lottie = () => {
  const yoon = React.useRef();
  React.useEffect(() => {
    lottie.loadAnimation({
      container: yoon.current, 
      animationData: lottieAni,
      loop: true,
      aytoplay: true,
    });
  }, []);

  return (
    <>
      <div ref={yoon} style={{ position: "absolute", width:100, height:100, top:12}}>
        {/* <span  style={{ position: "absolute", 
       }}>
        </span> */}
      </div>
    </>
  );
};

export default Lottie;

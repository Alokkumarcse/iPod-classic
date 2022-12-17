import React from "react";
import '../styles/WheelButton.css';


class WheelButton extends React.Component {

   render() {
      return(
         <div className="wheel-container">
            <div className="top-btn">top</div>
            <div className="left-btn">left</div>
            <div className="right-btn">right</div>
            <div className="buttom-btn">buttom</div>
         </div>
      );
   }
}
export default WheelButton;
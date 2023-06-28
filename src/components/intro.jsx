import React from "react";
import "../App.css";

const Intro = (props) => {
  return (
    <div className="col-md-6" style={style.box450}>
      <h4 style={style.greyText}>{props.content}</h4>
      <a href="#" className="btn buttonAction">
        Pelajari Detail Program
      </a>
    </div>
  );
};

const style = {
  box450: {
    height: "450px",
  },

  greyText: {
    color: "#9B9B9B",
  },
};

export default Intro;

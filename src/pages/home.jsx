import React from "react";

const Home = () => {
  return (
    <div style={style.container}>
      <img
        style={style.imageCover}
        src="/src/assets/DSQ.jpg"
        alt="Belajar Coding"
      />
      <div style={style.blockText}>
        <h1>Belajar Coding</h1>
        <h4>
          Lebih dari 2.000 modul belajar pemrograman dalam beragam format yang
          bisa kamu pelajari.
        </h4>
      </div>
    </div>
  );
};

const style = {
  container: {
    position: "relative",
    textAlign: "center",
  },

  imageCover: {
    width: "100%",
  },

  blockText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    color: "white",
  },
};

export default Home;

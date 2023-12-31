import React from "react";
import Intro from "../components/intro";
import Card from "../components/card";

const intro = {
  content: `Program pelatihan belajar pemrograman 
    dengan tatap muka secara offline dan 
    dengan bimbingan para instruktur profesional. 
    Peserta akan belajar dengan kurikulum yang 
    berorientasi pada industri dengan teknologi 
    terbaru dengan konsentrasi utama yaitu 
    pemrograman web dan Android. Saat ini 
    program diselenggarakan di 2 kota besar, 
    yaitu Bandung dan Jakarta.`,
};

const cards = [
  {
    id: 1,
    imageUrl: "/src/assets/DSQ.jpg",
    title: "Weekend Bootcamp",
    subtitle:
      "Kelas belajar coding yang diselenggarakan di setiap akhir pekan, berlokasi di Bandung dan Jakarta",
  },
  {
    id: 2,
    imageUrl: "/src/assets/DSQ.jpg",
    title: "Intensive Bootcamp",
    subtitle:
      "Kelas belajar pemrograman Web dan Android secara intensif selama satu minggu dengan sistem karantina",
  },
];

const DevSchool = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>DEVELOPER SCHOOL</h1>
      <div className="row" style={{ marginTop: "50px", marginBottom: "100" }}>
        <Intro content={intro.content} />
        <div className="col-md-6">
          <img src="/src/assets/codepolitan.jpg" alt="Developer School" />
        </div>
      </div>
      <div className="row" style={{ marginBottom: "50" }}>
        {cards.map((card) => (
          <Card
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default DevSchool;

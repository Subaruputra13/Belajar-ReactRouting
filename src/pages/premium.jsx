import React from "react";
import Intro from "../components/intro";
import Card from "../components/card";

const intron = {
  content: `Premium Online Course merupakan platform 
    belajar coding online yang dikemas secara 
    interaktif dengan beragam media belajar. 
    Kamu bisa belajar dan mengembangkan skill 
    pemrograman melalui program ini. Kami telah 
    menyusun kurikulum dan materi belajar pada 
    setiap course dengan alur yang sangat jelas 
    sehingga bisa diikuti oleh siapa saja. 
    Kamu tak perlu bingung lagi bagaimana cara 
    memulai belajar pemrograman. Pilih jalur 
    belajarmu, mulai belajar coding sekarang dan 
    jadilah developer prefessional!`,
};

const features = [
  {
    id: 1,
    title: "Materi Belajar",
    desc: "Materi belajar disusun secara sistematis dengan metode dan teknologi terbaru. Materi belajar menggunakan berbagai media.",
  },
  {
    id: 2,
    title: "Waktu Belajar",
    desc: "Waktu belajar sangat fleksibel. Kamu bisa menyesuaikan waktu belajarmu dengan kesibukan yang kamu miliki.",
  },
  {
    id: 3,
    title: "Metode Belajar",
    desc: "Kamu hanya perlu mengikuti alur belajar yang telah disediakan dengan membaca teks penjelasan, memutar video belajar dan mencoba sendiri.",
  },
];

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

const Premium = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Premium Online Course</h1>
      <div className="row" style={{ marginTop: "40", marginBottom: "100px" }}>
        <Intro content={intron.content} />
        <div className="col-md-6" style={style.box450border}>
          {features.map((feature) => (
            <div key={feature.id}>
              <h5>
                <strong>{feature.title}</strong>
              </h5>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="row" style={{ marginBottom: "50px" }}>
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

const style = {
  box450border: {
    height: "450px",
    border: "1px solid #9B9B9B",
    borderRadius: 10,
    padding: 30,
  },
};

export default Premium;

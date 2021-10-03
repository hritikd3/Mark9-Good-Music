import React, { useState } from "react";
import "./styles.css";

const DualRemix = {
  pop: [
    { name: "perfect", singer: "Ed sheeren" , rating: "5/5"},
    { name: "Sky fall", singer: "Adele", rating: "4/5" },
    { name: "Shape Of YOu", singer: "Ed sheeren",rating: "5/5" },
    { name: "Rolling in the Deep", singer: "Adele" ,rating: "3/5"},
    { name: "Take me back to London", singer: "Ed sheeren" ,rating: "5/5"}
  ],

  IndianPop: [
    { name: "Pagal", singer: "Badshah",rating: "4/5" },
    { name: "Bad boy", singer: "Badshah, neeti mohan",rating: "4/5" },

    { name: "Kya  baat  Ay", singer: "Hardy Sandhu",rating: "5/5" },
    { name: "GendaPhool", singer: "Badshah" ,rating: "3/5"},
    { name: "Bom diggy diggy", singer: "Zack knight, jasmin walia",rating: "4/5" }
  ],

  Sad: [
    { name: "One", singer: "Ed sheeren",rating: "5/5" },
    { name: "fix you", singer: "Coldplay",rating: "4/5" },
    { name: "Visting Hours", singer: "Ed sheeren",rating: "4/5" },
    { name: "Bets Part of me", singer: "Ed sheeren",rating: "4/5" },

    { name: "Someone Like You", singer: "Adele",rating: "4/5" }
  ],

  // Punjabi Beats:[
  //   {name:"Suit Suit",singer:"Guru Randhawa"},
  //   {name:"Someone Like You", singer:"Adele"}
  // ]

  punjabiBeats: [
    { name: "Naja", singer: "Naja",rating: "5/5" },
    { name: "Prada", singer: "Prada",rating: "5/5" },
    { name: "Suit Suit", singer: "Guru Randhawa" ,rating: "4/5"},
    { name: "Babu Zimidar", singer: "Replay",rating: "4/5" },

    { name: "Mitran da boot", singer: "unknown" ,rating: "5/5"}
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("pop");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <center>
      {" "}
      <div className="App">
        <h1>Life is a song, love is the music </h1>
        <p>
          looking for best cetegorized Music genre ,we have made some selection
          for you ! hope you like it{" "}
        </p>

        <div>
          {Object.keys(DualRemix).map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",

                borderRadius: "0.8rem",
                padding: "0.5rem  1rem",
                border: "2px solid orange",
                margin: "1rem 0.3rem"
              }}
            >
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {DualRemix[selectedGenre].map((book) => (
              <li
                key={book.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "2px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {book.name} </div>
                <div style={{ fontSize: "smaller" }}> {book.singer} </div>
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </center>
  );
}

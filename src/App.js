import React, { useState } from "react";
import "./styles.css";

const DualRemix = {
  pop: [
    { name: "perfect", singer: "Ed sheeren" },
    { name: "Sky fall", singer: "Adele" },
    { name: "Shape Of YOu", singer: "Ed sheeren" },
    { name: "Rolling in the Deep", singer: "Adele" },
    { name: "Take me back to London", singer: "Ed sheeren" }
  ],

  IndianPop: [
    { name: "Pagal", singer: "Badshah" },
    { name: "Bad boy", singer: "Badshah, neeti mohan" },

    { name: "Kya  baat  Ay", singer: "Hardy Sandhu" },
    { name: "GendaPhool", singer: "Badshah" },
    { name: "Bom diggy diggy", singer: "Zack knight, jasmin walia" }
  ],

  Sad: [
    { name: "One", singer: "Ed sheeren" },
    { name: "fix you", singer: "Coldplay" },
    { name: "Visting Hours", singer: "Ed sheeren" },
    { name: "Bets Part of me", singer: "Ed sheeren" },

    { name: "Someone Like You", singer: "Adele" }
  ],

  // Punjabi Beats:[
  //   {name:"Suit Suit",singer:"Guru Randhawa"},
  //   {name:"Someone Like You", singer:"Adele"}
  // ]

  punjabiBeats: [
    { name: "Naja", singer: "Naja" },
    { name: "Prada", singer: "Prada" },
    { name: "Suit Suit", singer: "Guru Randhawa" },
    { name: "Babu Zimidar", singer: "Replay" },

    { name: "Mitran da boot", singer: "unknown" }
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </center>
  );
}

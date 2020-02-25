import React from "react";
import Pokedex from "./Pokedex";

function Pokegame(props) {
  let shuffledHand = shuffle(props.data);
  let hand1 = shuffledHand.slice(0, 4);
  let hand2 = shuffledHand.slice(4, 8);

  let hand1Exp = hand1.reduce((acc, cur) => acc + cur.base_experience, 0);
  let hand2Exp = hand2.reduce((acc, cur) => acc + cur.base_experience, 0);

  let [hand1Winner, hand2Winner] = (hand1Exp > hand2Exp)
    ? [true, false]
    : [false, true];

  return (
    <div>
      <div>
        <h2>Hand 1</h2>
        <Pokedex data={hand1} experience={hand1Exp} isWinner={hand1Winner} exp={hand1Exp} />
      </div>
      <div>
        <h2>Hand 2</h2>
        <Pokedex data={hand2} experience={hand2Exp} isWinner={hand2Winner} exp={hand2Exp} />
      </div>
    </div>
  );
}

Pokegame.defaultProps = {
  data: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
  ]
};

function shuffle(hand){
  let shuffled = [...hand];
  for (let i = shuffled.length - 1; i > 0; i--) {
		//looping backwards, set j to a random number between 0 and i
		let j = Math.floor(Math.random() * (i + 1));
		//swap values at index "i" and "j"
		[ shuffled[i], shuffled[j] ] = [ shuffled[j], shuffled[i] ];
	}
  return shuffled;
}

export default Pokegame;

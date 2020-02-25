import React from 'react';

function Pokecard(props) {
	const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const { name, id, type, base_experience } = props.pokemon;
  
	return (
    <div className="card" style={{width: "18rem", display:"inline-block"}}>
			<h3>{name}</h3>
			<img className="card-img-top" src={`${BASE_URL}${id}.png`} alt="none"/>
			<p>type: {type}</p>
			<p>exp: {base_experience}</p>
		</div>
	);
}

export default Pokecard;

import React, {Component} from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: "fire", base_exp: 62},
            {id: 11, name: 'Metapod', type: 'bug', base_exp: 72},
            {id: 94, name: 'Gengar', type: 'poison', base_exp: 255},
            {id: 114, name: 'Tangela', type: "grass", base_exp: 144},
            {id: 134, name: 'Vaporeon', type: "water", base_exp: 196},
            {id: 133, name: 'Evee', type: "normal", base_exp: 196},
        ]
    }

    render() {
        let hand1 = [];
        let hand2 = [ ...this.props.pokemon ];

        while(hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }

        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_exp, 0);
        return (
            <div>
                <h1>Pokegame</h1>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}

export default Pokegame;
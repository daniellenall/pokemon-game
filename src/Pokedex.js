import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: "fire", base_exp: 62},
            {id: 114, name: 'Tangela', type: "grass", base_exp: 144},
            {id: 134, name: 'Vaporeon', type: "water", base_exp: 196},
            {id: 133, name: 'Evee', type: "normal", base_exp: 196},
        ]
    }
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h2 className="Pokemon-winner">Winning Hand</h2>;
        } else {
            title = <h2 className="Pokemon-loser">Losing Hand</h2>;
        }

        return (
            <div className="Pokedex">
                {title}
                <p> Total: {this.props.exp} </p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_exp}/>
                    ))}
                </div>
                
            </div>
        )
    }
}

export default Pokedex;
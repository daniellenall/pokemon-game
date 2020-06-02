import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <div className="Pokecard-header">
                    <p>{this.props.name}</p> <p>{this.props.exp}</p>
                </div>
                <h1></h1>
                <img className="Pokecard-img" src={imgSrc} alt="{this.props.name}"/>
                <span className={this.props.type}>{this.props.type}</span>

            </div>
        )
    }
}

export default Pokecard;
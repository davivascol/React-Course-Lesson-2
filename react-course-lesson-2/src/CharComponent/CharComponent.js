import React, {Component} from 'react';
import './CharComponent.css'

class CharComponent extends Component {

    render () {
        
        const char = this.props.char;
        let divCharacter = null;
        if(char)
        {
            divCharacter = (<div className="CharComponent" onClick={this.props.click}>{char}</div>);
        }

        return (divCharacter);
    }
}

export default CharComponent;
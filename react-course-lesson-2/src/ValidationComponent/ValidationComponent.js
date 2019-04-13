import React, {Component} from 'react';

class ValidationComponent extends Component {

    render() {

        let resultado = null;
        if (this.props.tamanho > 5){
            resultado = (<div>Text too long</div>);
        }
        else{
            resultado = (<div>Text too short</div>);
        }

        return (resultado);
    }
}

export default ValidationComponent;
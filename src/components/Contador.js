import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<h1>
            {
                this.props.contador
            }
            </h1>);
    }
}

Component.propTypes = {
    contador : PropTypes.number.isRequired
}

export default Contador;
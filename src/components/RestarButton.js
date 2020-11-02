import React, { Component } from 'react';
import PropTypes from 'prop-types';


class RestarButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<button className="btn btn-danger" onClick={() => {this.props.action(1)}}>
            Decrementar 
        </button>);
    }
}

RestarButton.propTypes = {
    action : PropTypes.func.isRequired
}
 
export default RestarButton;
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SumarButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<button className="btn btn-success" onClick={() => {this.props.action(1)}}>
            Incrementar 
        </button>);
    }
}

SumarButton.propTypes = {
    action : PropTypes.func.isRequired
}
 
export default SumarButton;
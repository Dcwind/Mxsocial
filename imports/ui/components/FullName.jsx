import React, {Component, PropTypes} from 'react';

export default class FullName extends Component{
    render(){
        const {

        } = this.props
    }
    
}

FullName.propTypes = {
    fullName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    className: PropTypes.string,
};
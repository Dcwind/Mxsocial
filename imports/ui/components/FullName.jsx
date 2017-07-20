import React, {Component} from 'react';

export default class FullName extends Component{
    
}

FullName.propTypes = {
    fullName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    className: PropTypes.string,
};
import React, { Component, PropTypes } from 'react';

export default class Avatar extends Component {
    render(){
        const {
            avatar,
            firstName,
            lastName,
            klass
        } = this.props;

       
    }
}

Avatar.propTypes = {
    avatar: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    klass: PropTypes.string,
    
};

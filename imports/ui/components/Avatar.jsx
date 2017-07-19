import React, { Component, PropTypes } from 'react';

export default class Avatar extends Component {
    render(){
        const {
            avatar,
            firstName,
            lastName,
            klass
        } = this.props;

        if (!avatar) {
            return (
                <img
                    className={this.props.klass}
                    src='/images/generic-user-profile.png'
                    alt="Image"
                />
            );
        }

        
    }
}

Avatar.propTypes = {
    avatar: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    klass: PropTypes.string,
    
};

import React, { Component, PropTypes } from 'react';

export default class Avatar extends Component {
    render(){
        const {
            avatar,
            firstName,
            lastName,
            klass,
            wrapLink
        } = this.props;

        if (!avatar) {
            return (
                <img
                    className={klass}
                    src='/images/generic-user-profile.png'
                    alt="Image"
                />
            );
        }

        const personLink = (`/user/${firstName}${lastName}`).toLowerCase();
        const avatarImg = <img className={klass} src={avatar} alt="Image" />;

        if (wrapLink) {
            return (
                <a href={personLink}>
                    {avatarImg}
                </a>
            );
        }

        return avatarImg;

        
    }
}

Avatar.propTypes = {
    avatar: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    klass: PropTypes.string,
    
};

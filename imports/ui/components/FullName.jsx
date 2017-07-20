import React, {Component, PropTypes} from 'react';

export default class FullName extends Component{
    render(){
        const {
            fullName,
            firstName,
            lastName,
            klass
        } = this.props

        const personLink = (`/user/${fullName}`).toLowerCase();

        return (
         
                <a href={personLink} className={klass}>{fullName}</a>
         
        )
    }
    
}

FullName.propTypes = {
    fullName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    className: PropTypes.string,
};
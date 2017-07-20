import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Avatar from './Avatar';

class UserHome extends Component{
    render(){
 
    }
}

export default createContainer(()=> {

    return {
        currentUser,
        ready: !!currentUser
    }
}, UserHome);
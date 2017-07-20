import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Avatar from './Avatar';

class UserHome extends Component{
    render(){
          const {
            ready,
            user,
        } = this.props;

        if (!ready && !user) {
            return <div>Loading...</div>;
        }
    }
}

export default createContainer((props)=> {

    const userhandle = Meteor.subscribe('Users.User', 'profile.fullname', props.params.fullname);
    const currentUser = Meteor.user();

    let user = null;
    if (userhandle.ready()) {
        user = Meteor.users.findOne({ 'profile.fullname': props.params.fullname });
    }

    return {
        currentUser,
        user,
        ready: !!currentUser && user !== null
    }
}, UserHome);
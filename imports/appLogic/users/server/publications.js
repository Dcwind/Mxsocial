
import { Meteor } from 'meteor/meteor';

Meteor.publish('Users.User', (searchField, data) => {
    return Meteor.users.find(
        {
            [searchField]: data,
        },

    );
});
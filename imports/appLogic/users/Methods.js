import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'User.changeEmail': function changeEmail(email) {
        if (email) {
            Meteor.users.update(Meteor.userId(), {
                    $set: {
                        'emails.0.address': email,
                    },
            });
        }
    },
})
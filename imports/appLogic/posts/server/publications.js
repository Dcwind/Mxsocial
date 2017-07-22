import { Meteor } from 'meteor/meteor';
import Posts from '../Posts';

Meteor.publish('Posts.list', function() {
    return Posts.find({}, { sort: { createdAt: -1 } });
});
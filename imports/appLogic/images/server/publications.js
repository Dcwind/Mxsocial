
import { Meteor } from 'meteor/meteor';
import Images from '../Images';

Meteor.publish('Images.all', function() {
    return Images.find({
        userId: this.userId,
    }).cursor;
});